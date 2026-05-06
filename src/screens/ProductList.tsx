import { View, ActivityIndicator, FlatList } from 'react-native';

import React, { FC, useCallback, useEffect, useState } from 'react';

import Item from './Item';
import { Product } from '../types/types';

const ProductList: FC = () => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

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

  useEffect(() => {
    fetchProducts();
  }, [page]);

  const renderItem = useCallback(({ item }: any) => {
    return <Item item={item} />;
  }, []);

  const renderFooter = () => {
    if (!loading) return null;

    return (
      <View style={{ marginVertical: 20 }}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  };

  // 🔥 Initial Loader
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
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        onEndReached={() => setPage(prev => prev + 1)}
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
