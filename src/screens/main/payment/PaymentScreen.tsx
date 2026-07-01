import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import WrapperContainer from '@/components/Wrapper/WrapperContainer';
import AppText from '@/components/AppText/AppText';
import AppButton from '@/components/AppButton/AppButton';
import Colors from '@/styles/colors';
import useStyles from '@/screens/main/payment/PaymentScreen.styles';
import { RootState } from '@/redux/store';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import PaymentMethodCard from '@/components/PaymentMethodCard/PaymentMethodCard';
import PriceSummaryCard from '@/components/PriceSummary/PriceSummaryCard';
import { quoteThunk } from '@/redux/thunk/quotesThunk';
import RazorpayCheckout from 'react-native-razorpay';
import { paymentOptionsThunk } from '@/redux/thunk/paymentOptionsThunk';
import { placeOrderThunk } from '@/redux/thunk/placeOrderThunk';
import { navigate } from '@/utils/navigationUtils';
import { Routes } from '@/constants/routes';

const PaymentScreen: React.FC = () => {
  const styles = useStyles();
  const dispatch = useAppDispatch();

  const { addresses } = useAppSelector((state: RootState) => state.address);
  const address =
    addresses.length > 0 ? addresses[addresses.length - 1] : undefined;
  const [selectedMethod, setSelectedMethod] = useState<'cod' | 'razorpay'>(
    'cod',
  );

  const { cart } = useAppSelector((state: RootState) => state.cart);

  useEffect(() => {
    dispatch(paymentOptionsThunk());
  }, []);
  const subtotal =
    cart?.items?.reduce((sum: number, item: any) => {
      return sum + item.productId.price * item.quantity;
    }, 0) ?? 0;

  const discount = 0;

  const shipping = subtotal > 0 ? 50 : 0;

  const tax = Math.round(subtotal * 0.18);

  const total = subtotal - discount + shipping + tax;
  const handlePlaceOrder = async () => {
    if (!address || !cart?.items?.length) {
      return;
    }

    // Quote Payload
    const quotePayload = {
      items: cart.items.map((item: any) => ({
        productId: item.productId._id,
        variantId: '',
        quantity: item.quantity,
      })),
      shippingAddress: {
        fullName: address.fullName,
        phone: address.phone,
        line1: address.line1,
        line2: address.line2,
        city: address.city,
        state: address.state,
        country: address.country,
        postalCode: address.postalCode,
      },
    };

    try {
      const quoteResponse = await dispatch(quoteThunk(quotePayload)).unwrap();

      console.log('QUOTE RESPONSE =>', quoteResponse);

      if (selectedMethod === 'razorpay') {
        const orderPayload = {
          quoteId: quoteResponse.data.quote._id,
          paymentMethod: 'razorpay',

          items: cart.items.map((item: any) => ({
            productId: item.productId._id,
            variantId: item.variantId ?? '',
            quantity: item.quantity,
          })),

          shippingAddress: {
            fullName: address.fullName,
            phone: address.phone,
            line1: address.line1,
            line2: address.line2,
            city: address.city,
            state: address.state,
            country: address.country,
            postalCode: address.postalCode,
          },
        };

        console.log('ORDER PAYLOAD =>', JSON.stringify(orderPayload, null, 2));

        const orderResponse = await dispatch(
          placeOrderThunk(orderPayload),
        ).unwrap();

        console.log(
          'ORDER RESPONSE =>',
          orderResponse,
          JSON.stringify(orderResponse, null, 2),
        );

        const options = {
          key: orderResponse.data.key,
          amount: orderResponse.data.amount,
          currency: orderResponse.data.currency,
          order_id: orderResponse.data.orderId,

          name: 'My Store',
          description: 'Order Payment',

          prefill: {
            name: address.fullName,
            contact: address.phone,
          },

          theme: {
            color: '#2E7D32',
          },
        };
        try {
          const payment = await RazorpayCheckout.open(options);
          console.log('PAYMENT SUCCESS =>', payment);
        } catch (error) {
          console.log('PAYMENT FAILED =>', error);
        }
      } else {
        // COD
        const orderPayload = {
          quoteId: quoteResponse.data.quote._id,
          paymentMethod: 'cod',

          items: cart.items.map((item: any) => ({
            productId: item.productId._id,
            variantId: item.variantId ?? '',
            quantity: item.quantity,
          })),

          shippingAddress: {
            fullName: address.fullName,
            phone: address.phone,
            line1: address.line1,
            line2: address.line2,
            city: address.city,
            state: address.state,
            country: address.country,
            postalCode: address.postalCode,
          },
        };

        const orderResponse = await dispatch(
          placeOrderThunk(orderPayload),
        ).unwrap();

        console.log('COD ORDER =>', orderResponse);
        navigate(Routes.CONFIRMATION, {
          order: orderResponse.data,
        });
      }
    } catch (error) {
      console.log('ERROR =>', error);
    }
  };
  return (
    <WrapperContainer style={styles.container}>
      <View style={styles.card}>
        <AppText title="Delivery Address" weight="700" size={18} />
        {address ? (
          <>
            <AppText title={address.fullName} style={styles.spacing} />
            <AppText title={address.phone} />
            <AppText title={address.line1} />
            {address.line2 ? <AppText title={address.line2} /> : null}
            <AppText
              title={`${address.city}, ${address.state} - ${address.postalCode}`}
            />

            <AppText title={address.country} />
          </>
        ) : (
          <AppText title="No address available" color={Colors.error} />
        )}
      </View>

      <View style={styles.card}>
        <PaymentMethodCard
          selectedMethod={selectedMethod}
          onChange={setSelectedMethod}
        />
      </View>
      <View style={styles.card}>
        <PriceSummaryCard
          subtotal={subtotal}
          discount={discount}
          shipping={shipping}
          tax={tax}
          total={total}
        />
      </View>
      <AppButton
        title="Place Order"
        onPress={handlePlaceOrder}
        style={styles.button}
      />
    </WrapperContainer>
  );
};

export default PaymentScreen;
