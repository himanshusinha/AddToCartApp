import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import FastImage from 'react-native-fast-image';

import styles from './ProductCartStyles';

const ItemCart = ({ item, onIncrease, onDecrease, onRemove }: any) => {
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
              onPress={() => onDecrease(item.id)}
              style={styles.quantityBtn}
            >
              <Text style={styles.quantityText}>-</Text>
            </TouchableOpacity>

            <Text style={styles.qtyValue}>{item.qty}</Text>

            <TouchableOpacity
              onPress={() => onIncrease(item.id)}
              style={styles.quantityBtn}
            >
              <Text style={styles.quantityText}>+</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => onRemove(item.id)}>
            <Text style={styles.removeText}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default React.memo(ItemCart);
