import React, { FC } from 'react';
import { FlatList, StyleSheet, View, Text, Image } from 'react-native';

import { IProduct } from '../../types';
import { ProductCell } from './ProductCell';
import { Colors, Styles } from '../../constants';
import EmptyInvitesImg from "../../assets/images/empty-products.png";

interface ProductsListProps {
    products: IProduct[];
    onPress: (id: number) => void;
}

export const ProductsList: FC<ProductsListProps> = ({ products, onPress }) => {
  return (
    <FlatList
      testID='products-list'
      style={styles.list}
      showsVerticalScrollIndicator={false}
      data={products}
      ItemSeparatorComponent={() => <View style={{ marginVertical: 4 }} />}
      renderItem={({ item, index }) => <ProductCell key={index} product={item} onPress={() => onPress(item.id)} />}
      ListFooterComponent={() => <View style={{ marginTop: 33 }}/>}
      ListEmptyComponent={() => (
        <View style={styles.emptyState} testID='products-list-empty-state'>
          <Image source={EmptyInvitesImg} style={styles.image} />
          <Text style={styles.primaryText}>No hay movimientos registrados</Text>
          <Text style={styles.secondaryText}>Realiza una compra y vuelve más tarde</Text>
        </View>
      )}
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
  },
  emptyState: {
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 190,
    height: 150,
    resizeMode: "cover",
    marginBottom: 24,
  },
  primaryText: {
    ...Styles.textTitleRegular,
  },
  secondaryText: {
    ...Styles.textCaptionSmall,
    color: Colors.gray,
  },
})