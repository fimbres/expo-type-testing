import React, { FC } from "react";
import { StyleSheet, Image, View } from "react-native";

import { Colors } from "../../constants";

interface ProductImageBadgeProps {
  productImageUri: string;
}

export const ProductImageBadge: FC<ProductImageBadgeProps> = ({
  productImageUri,
}) => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={{ uri: productImageUri }}
        style={styles.image}
        testID="product-image"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: 1,
    borderRadius: 10,
    marginTop: 19,
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 2,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
  },
  image: {
    width: 200,
    height: 200,
  },
});
