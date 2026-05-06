import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import styles from '../screens/ProductCartStyles';

const CartSummary = ({ subTotal, shipping, total }: any) => {
  return (
    <View style={styles.bottomBox}>
      <View style={styles.rowBetween}>
        <Text>Subtotal</Text>

        <Text>₹{subTotal.toFixed(2)}</Text>
      </View>

      <View style={[styles.rowBetween, styles.marginTop]}>
        <Text>Shipping</Text>
        <Text>₹{shipping.toFixed(2)}</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.rowBetween}>
        <Text style={styles.totalText}>Total</Text>

        <Text style={styles.totalText}>₹{total.toFixed(2)}</Text>
      </View>

      <TouchableOpacity style={styles.checkoutBtn}>
        <Text style={styles.checkoutText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(CartSummary);
