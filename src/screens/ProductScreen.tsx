import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import React, { FC, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { ProductDetails } from '../redux/ProductSlice';

import { AppDispatch } from '../store/store';

import { addToCart, removeFromCart } from '../redux/CartSlice';

import { useNavigation } from '@react-navigation/native';
import styles from './ProductStyles';
import FastImage from 'react-native-fast-image';

const ProductScreen: FC = () => {
  const { product, error, loading } = useSelector(
    (state: any) => state.ProductList,
  );

  const cartItems = useSelector((state: any) => state.Cart.items);

  const cartCount = cartItems.length;

  const dispatch = useDispatch<AppDispatch>();

  const navigation = useNavigation<any>();

  useEffect(() => {
    dispatch(ProductDetails());
  }, [dispatch]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size={30} color={'black'} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text>Error Loading Products</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.heading}>Products</Text>

        <TouchableOpacity onPress={() => navigation.navigate('ProductCart')}>
          <View>
            <Text style={styles.cartIcon}>🛒</Text>

            {cartCount > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{cartCount}</Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={product}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({ item }) => {
          const isInCart = cartItems.some(
            (cartItem: any) => cartItem.id === item.id,
          );

          const shortText =
            item.description.length > 60
              ? item.description.substring(0, 60) + '...'
              : item.description;

          return (
            <View style={styles.card}>
              <FastImage source={{ uri: item.image }} style={styles.image} />

              <View style={styles.content}>
                <Text
                  numberOfLines={2}
                  ellipsizeMode="tail"
                  style={styles.title}
                >
                  {item.title}
                </Text>

                <Text style={styles.description}>{shortText}</Text>

                <Text style={styles.price}>₹{item.price}</Text>

                <TouchableOpacity
                  onPress={() =>
                    isInCart
                      ? dispatch(removeFromCart(item.id))
                      : dispatch(addToCart(item))
                  }
                  style={[
                    styles.button,
                    {
                      backgroundColor: isInCart ? 'red' : 'orange',
                    },
                  ]}
                >
                  <Text style={styles.buttonText}>
                    {isInCart ? 'Remove from Cart' : 'Add to Cart'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ProductScreen;
