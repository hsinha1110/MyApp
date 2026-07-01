import React, { useState } from 'react';
import { View, TextInput, ScrollView } from 'react-native';
import WrapperContainer from '@/components/Wrapper/WrapperContainer';
import AppText from '@/components/AppText/AppText';
import AppButton from '@/components/AppButton/AppButton';

const ReturnScreen = () => {
  const [reason, setReason] = useState('defective');
  const [resolution, setResolution] = useState('refund');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    const payload = {
      orderId: 'ORDER_ID',
      items: [
        {
          productId: 'PRODUCT_ID',
          orderItemId: 'ORDER_ITEM_ID',
          quantity: 1,
          reason,
        },
      ],
      reason,
      description,
      resolution,
      photos: [],
    };

    console.log('RETURN PAYLOAD =>', payload);

    // dispatch(returnThunk(payload));
  };

  return (
    <WrapperContainer>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <AppText title="Request Return" weight="700" size={22} />

        <View
          style={{
            marginTop: 20,
            padding: 16,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#ddd',
          }}
        >
          <AppText title="Product" weight="600" />
          <AppText title="Demo Galaxy A55 5G" />

          <AppText title="Quantity" style={{ marginTop: 15 }} />
          <AppText title="1" />
        </View>

        <AppText title="Reason" style={{ marginTop: 25 }} />

        <TextInput
          value={reason}
          onChangeText={setReason}
          placeholder="Reason"
          style={{
            borderWidth: 1,
            borderColor: '#ddd',
            borderRadius: 8,
            marginTop: 10,
            padding: 12,
          }}
        />

        <AppText title="Resolution" style={{ marginTop: 20 }} />

        <TextInput
          value={resolution}
          onChangeText={setResolution}
          placeholder="refund"
          style={{
            borderWidth: 1,
            borderColor: '#ddd',
            borderRadius: 8,
            marginTop: 10,
            padding: 12,
          }}
        />

        <AppText title="Description" style={{ marginTop: 20 }} />

        <TextInput
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={5}
          placeholder="Describe the issue..."
          style={{
            borderWidth: 1,
            borderColor: '#ddd',
            borderRadius: 8,
            marginTop: 10,
            padding: 12,
            textAlignVertical: 'top',
            height: 120,
          }}
        />

        <AppButton
          title="Submit Return"
          onPress={handleSubmit}
          style={{ marginTop: 30 }}
        />
      </ScrollView>
    </WrapperContainer>
  );
};

export default ReturnScreen;
