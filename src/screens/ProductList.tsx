import { View, ActivityIndicator, FlatList } from 'react-native';

import React, { FC, useCallback, useEffect, useState } from 'react';

import Item from './Item';

import { Product } from '../types/types';

const ProductList: FC = () => {
  const [data, setData] = useState<Product[]>([]);

  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);

  // ===== FETCH PRODUCTS =====

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `https://fakestoreapi.com/products?limit=5&page=${page}`,
      );

      const result = await response.json();
      setData(prev => [...prev, ...result]);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  // ===== API CALL =====

  useEffect(() => {
    fetchProducts();
  }, [page]);

  // ===== RENDER ITEM =====

  const renderItem = useCallback(
    ({ item }: { item: Product }) => <Item item={item} />,
    [],
  );
  // ===== FOOTER =====

  const renderFooter = useCallback(() => {
    if (!loading) return null;

    return (
      <View style={{ marginVertical: 20 }}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }, [loading]);

  // ===== LOAD MORE =====

  const handleLoadMore = useCallback(() => {
    if (!loading) {
      setPage(prev => prev + 1);
    }
  }, [loading]);

  // ===== INITIAL LOADER =====

  if (loading && data.length === 0) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        showsVerticalScrollIndicator={false}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        windowSize={5}
        removeClippedSubviews
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

export default ProductList;
