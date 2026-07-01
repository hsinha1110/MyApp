import React, { useEffect } from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '@/constants/routes';
import { RootState } from '@/redux/store';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getOrdersThunk } from '@/redux/thunk/getOrderThunk';
import WrapperContainer from '@/components/Wrapper/WrapperContainer';
import AppText from '@/components/AppText/AppText';
import useStyles from './OrdersScreen.styles';
import { getStatusColor } from '@/redux/types';
import Colors from '@/styles/colors';

const OrdersScreen: React.FC = () => {
  const styles = useStyles();

  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();

  const { orders, loading } = useAppSelector(
    (state: RootState) => state.orders,
  );
  console.log(orders,'')
  useEffect(() => {
    dispatch(
      getOrdersThunk({
        page: 1,
        limit: 10,
      }),
    );
  }, []);

  const renderItem = ({ item }: any) => {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate(Routes.ORDER_DETAIL, {
            orderId: item.id,
          })
        }
      >
        <AppText title={`Order #${item.order_number}`} weight="700" size={16} />

        <View
          style={[
            styles.statusBadge,
            {
              backgroundColor: getStatusColor(item.status),
            },
          ]}
        >
          <AppText
            title={item.status.replace(/_/g, ' ').toUpperCase()}
            color={Colors.white}
            weight="700"
            size={12}
          />
        </View>

        <AppText
          title={`Amount : ₹${item.payable_amount}`}
          style={styles.spacing}
        />

        <AppText
          title={new Date(item.created_at).toLocaleDateString()}
          style={styles.spacing}
        />
      </TouchableOpacity>
    );
  };

  if (loading) {
    return (
      <WrapperContainer>
        <ActivityIndicator size="large" />
      </WrapperContainer>
    );
  }

  return (
    <WrapperContainer style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={(item: any) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <AppText title="No Orders Found" />
          </View>
        }
      />
    </WrapperContainer>
  );
};

export default OrdersScreen;
