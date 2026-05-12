import { View, FlatList } from 'react-native';

import React, { FC, useMemo, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { decreaseQty, increaseQty, removeFromCart } from '../redux/CartSlice';

import { AppDispatch } from '../store/store';

import styles from './ProductCartStyles';

import ItemCart from './ItemCart';

import CartSummary from '../component/CartSummary';

import EmptyCart from '../component/EmptyCart';

const ProductCart: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const cartItems = useSelector((state: any) => state.Cart.items);

  // ===== TOTALS =====

  const subTotal = useMemo(() => {
    return cartItems.reduce(
      (sum: number, item: any) => sum + item.price * item.qty,
      0,
    );
  }, [cartItems]);

  const shipping = cartItems.length > 0 ? 100 : 0;

  const total = subTotal + shipping;

  // ===== ACTIONS =====

  const handleIncrease = useCallback(
    (id: number) => {
      dispatch(increaseQty(id));
    },
    [dispatch],
  );

  const handleDecrease = useCallback(
    (id: number) => {
      dispatch(decreaseQty(id));
    },
    [dispatch],
  );

  const handleRemove = useCallback(
    (id: number) => {
      dispatch(removeFromCart(id));
    },
    [dispatch],
  );

  // ===== RENDER ITEM =====

  const renderItem = useCallback(
    ({ item }: any) => (
      <ItemCart
        item={item}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
        onRemove={handleRemove}
      />
    ),
    [handleIncrease, handleDecrease, handleRemove],
  );

  return (
    <View style={styles.container}>
      {cartItems.length > 0 ? (
        <>
          <FlatList
            data={cartItems}
            renderItem={renderItem}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
            // ===== PERFORMANCE =====

            removeClippedSubviews
            initialNumToRender={5}
            maxToRenderPerBatch={5}
            updateCellsBatchingPeriod={50}
            windowSize={5}
          />

          <CartSummary subTotal={subTotal} shipping={shipping} total={total} />
        </>
      ) : (
        <EmptyCart />
      )}
    </View>
  );
};

export default ProductCart;
