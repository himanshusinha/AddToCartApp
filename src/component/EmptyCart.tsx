import React from 'react';

import { View, Text } from 'react-native';

import styles from '../screens/ProductCartStyles';

const EmptyCart = () => {
  return (
    <View style={styles.emptyContainer}>
      <Text style={styles.cartIcon}>🛒</Text>

      <Text style={styles.emptyTitle}>Cart is Empty</Text>

      <Text style={styles.emptySubtitle}>Add products to continue</Text>
    </View>
  );
};

export default React.memo(EmptyCart);
