import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { Styles } from '../constants'
import { RootStackParamList } from '../navigation/types'
import { selectAllProducts, selectNotRedemptionProducts, selectRedemptionProducts } from '../stores/productsSlice'
import { useSelector } from 'react-redux'
import { useGetProductsQuery } from '../stores/apiSlice'

const HomeScreen: FC<NativeStackScreenProps<RootStackParamList, "Home">> = () => {
  const { isError, isLoading, error } = useGetProductsQuery({});
  const allProducts = useSelector(selectAllProducts);
  const redemptionProducts = useSelector(selectRedemptionProducts);
  const notRedemptionProducts = useSelector(selectNotRedemptionProducts);

  return (
    <View style={styles.container}>
      <Text style={Styles.textTitleGiant}>HomeScreen</Text>
      <Text style={Styles.textCaptionExtraSmall}>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
