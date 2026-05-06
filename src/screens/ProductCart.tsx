import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';

import React, { FC, useMemo } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { decreaseQty, increaseQty, removeFromCart } from '../redux/CartSlice';

import { AppDispatch } from '../store/store';
import styles from './ProductCartStyles';
import FastImage from 'react-native-fast-image';

const ProductCart: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const cartItems = useSelector((state: any) => state.Cart.items);

  const subTotal = useMemo(() => {
    return cartItems.reduce(
      (sum: number, item: any) => sum + item.price * item.qty,
      0,
    );
  }, [cartItems]);

  const shipping = cartItems.length > 0 ? 100 : 0;

  const total = subTotal + shipping;

  return (
    <View style={styles.container}>
      {cartItems.length > 0 ? (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              const shortText =
                item.description.length > 60
                  ? item.description.substring(0, 60) + '...'
                  : item.description;

              return (
                <View style={styles.card}>
                  <FastImage
                    resizeMode="contain"
                    source={{ uri: item.image }}
                    style={styles.image}
                  />

                  <View style={styles.content}>
                    <Text numberOfLines={1} style={styles.title}>
                      {item.title}
                    </Text>

                    <Text style={styles.description}>{shortText}</Text>

                    <Text style={styles.price}>₹{item.price}</Text>

                    <View style={styles.rowBetween}>
                      <View style={styles.quantityContainer}>
                        <TouchableOpacity
                          onPress={() => dispatch(decreaseQty(item.id))}
                          style={styles.quantityBtn}
                        >
                          <Text style={styles.quantityText}>-</Text>
                        </TouchableOpacity>

                        <Text style={styles.qtyValue}>{item.qty}</Text>

                        <TouchableOpacity
                          onPress={() => dispatch(increaseQty(item.id))}
                          style={styles.quantityBtn}
                        >
                          <Text style={styles.quantityText}>+</Text>
                        </TouchableOpacity>
                      </View>

                      <TouchableOpacity
                        onPress={() => dispatch(removeFromCart(item.id))}
                      >
                        <Text style={styles.removeText}>Remove</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            }}
          />

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
        </>
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.cartIcon}>🛒</Text>

          <Text style={styles.emptyTitle}>Cart is Empty</Text>

          <Text style={styles.emptySubtitle}>Add products to continue</Text>
        </View>
      )}
    </View>
  );
};

export default ProductCart;
