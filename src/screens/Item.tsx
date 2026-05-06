import { View, Text, Image, StyleSheet } from 'react-native';

import React from 'react';
import styles from './ItemStyles';
import { ItemProps } from '../types/types';
import FastImage from 'react-native-fast-image';

const Item = ({ item }: ItemProps) => {
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

        <Text style={styles.price}>₹ {item.price}</Text>
      </View>
    </View>
  );
};

export default React.memo(Item);
