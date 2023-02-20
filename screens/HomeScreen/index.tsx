import React, { FC, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import Toast from "react-native-root-toast";

import { Colors, Styles } from "../../constants";
import {
  FilterButtons,
  Loader,
  PointsBadge,
  ProductsList,
  SafeAreaContainer,
  ScreenHeader,
  ScreenFooter,
} from "../../components";
import { Filter } from "../../types";
import { RootStackParamList } from "../../navigation/types";
import { useGetProductsQuery } from "../../slices/apiSlice";
import {
  selectTotalPoints,
  selectAllProducts,
  selectNotRedemptionProducts,
  selectRedemptionProducts,
} from "../../slices/productsSlice";

const HomeScreen: FC<NativeStackScreenProps<RootStackParamList, "Home">> = ({
  navigation,
  route,
}) => {
  const { isError, isLoading, error } = useGetProductsQuery({});
  const totalPoints = useSelector(selectTotalPoints);
  const allProducts = useSelector(selectAllProducts);
  const redemptionProducts = useSelector(selectRedemptionProducts);
  const notRedemptionProducts = useSelector(selectNotRedemptionProducts);
  const [filter, setFilter] = useState<Filter>(
    route.params?.initialFilter || "all"
  );

  useEffect(() => {
    if (isError) {
      showToast();
      console.error("Error: ", error);
    }
  }, [isError]);

  const showToast = () => {
    Toast.show("Error cargando los productos", {
      duration: Toast.durations.LONG,
      containerStyle: {
        marginTop: 40,
        backgroundColor: Colors.red,
      },
      textColor: Colors.white,
      position: 1,
    });
  };

  const getProducts = () => {
    switch (filter) {
      case "all":
        return allProducts;
      case "redemption":
        return redemptionProducts;
      case "no-redemption":
        return notRedemptionProducts;
    }
  };

  return (
    <SafeAreaContainer>
      <>
        {isLoading && <Loader />}
        <ScreenHeader
          title="Bienvenido de vuelta!"
          subtitle="Ruben Rodriguez"
        />
        <View style={styles.container}>
          <Text style={styles.subTitle}>Tus Puntos</Text>
          <PointsBadge points={totalPoints} />
          <Text style={styles.subTitle}>Tus Movimientos</Text>
          <ProductsList
            products={getProducts()}
            onPress={(product) => navigation.navigate("Product", { product })}
          />
          <ScreenFooter>
            <FilterButtons filter={filter} setFilter={setFilter} />
          </ScreenFooter>
        </View>
      </>
    </SafeAreaContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  subTitle: {
    ...Styles.textTitleSmall,
    color: Colors.gray,
    textTransform: "uppercase",
    marginVertical: 20,
  },
});
