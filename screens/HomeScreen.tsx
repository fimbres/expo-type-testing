import React, { FC, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useSelector } from 'react-redux'

import { Colors, Styles } from '../constants'
import { AppButton, PointsBadge, ProductsList, SafeAreaContainer, ScreenHeader } from '../components'
import { RootStackParamList } from '../navigation/types'
import { useGetProductsQuery } from '../stores/apiSlice'
import { selectTotalPoints, selectAllProducts, selectNotRedemptionProducts, selectRedemptionProducts } from '../stores/productsSlice'

const HomeScreen: FC<NativeStackScreenProps<RootStackParamList, "Home">> = ({ navigation }) => {
  const { isError, isLoading, error } = useGetProductsQuery({});
  const totalPoints = useSelector(selectTotalPoints);
  const allProducts = useSelector(selectAllProducts);
  const redemptionProducts = useSelector(selectRedemptionProducts);
  const notRedemptionProducts = useSelector(selectNotRedemptionProducts);
  const [filter, setFilter] = useState<"all" | "redemption" | "no-redemption">("all");

  return (
    <SafeAreaContainer>
      <>
        <ScreenHeader title='Bienvenido de vuelta!' subtitle='Ruben Rodriguez' />
        <View style={styles.container}>
          <Text style={styles.subTitle}>Tus Puntos</Text>
          <PointsBadge points={totalPoints}/>
          <Text style={styles.subTitle}>Tus Movimientos</Text>
          <ProductsList products={filter === "all" ? allProducts : filter === "redemption" ? redemptionProducts : notRedemptionProducts} onPress={(productId) => navigation.navigate("Product", { productId })} />
          <View style={styles.buttonsContainer}>
            {filter === "all" ? (
              <>
                <AppButton title="Ganados" onPress={() => setFilter("no-redemption")} />
                <View style={{ marginHorizontal: 6 }} />
                <AppButton title="Canjeados" onPress={() => setFilter("redemption")} />
              </>
            ) : (
              <AppButton title="Todos" size='lg' onPress={() => setFilter("all")} />
            )}
          </View>
        </View>
      </>
    </SafeAreaContainer>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
    },
    subTitle: {
      ...Styles.textTitleSmall,
      color: Colors.gray,
      textTransform: 'uppercase',
      marginVertical: 20,
    },
    buttonsContainer: {
      flexDirection: 'row',
      marginVertical: 40,
    }
});
