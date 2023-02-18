import React, { FC } from 'react';
import { FlatList, StyleSheet , View} from 'react-native';

import { IProduct } from '../../types';
import { ProductCell } from './ProductCell';
import { Colors } from '../../constants';

interface ProductsListProps {
    products: IProduct[];
    onPress: (id: number) => void;
}

export const ProductsList: FC<ProductsListProps> = ({ products, onPress }) => {
  return (
    <FlatList
      style={styles.list}
      showsVerticalScrollIndicator={false}
      data={products}
      ItemSeparatorComponent={() => <View style={{ marginVertical: 4 }} />}
      renderItem={({ item, index }) => <ProductCell key={index} product={item} onPress={() => onPress(item.id)} />}
      ListFooterComponent={() => <View style={{ marginTop: 33 }}/>}
    />
  )
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.white,
    borderRadius: 16,
    paddingVertical: 23,
  }
})