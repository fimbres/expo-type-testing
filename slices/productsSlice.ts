import { createSelector } from "@reduxjs/toolkit";
import moment from "moment";

import { apiSlice } from "./apiSlice";
import { IProduct } from "../types";

const initialState: IProduct[] = [];

const selectUsersResult = apiSlice.endpoints.getProducts.select({});

const sortProducts = (first: IProduct, second: IProduct) => {
  return moment(second.createdAt).valueOf() - moment(first.createdAt).valueOf();
};

export const selectAllProducts = createSelector(
  selectUsersResult,
  (productsResult) =>
    productsResult.data
      ? [...productsResult.data].sort(sortProducts)
      : initialState
);

export const selectTotalPoints = createSelector(selectAllProducts, (products) =>
  products.reduce((sum, product) => {
    if (product.is_redemption) {
      return (sum -= product.points);
    } else {
      return (sum += product.points);
    }
  }, 0)
);

export const selectProductById = createSelector(
  selectAllProducts,
  (_: IProduct[], productId: number) => productId,
  (products, productId) => products.find((product) => product.id == productId)
);

export const selectRedemptionProducts = createSelector(
  selectAllProducts,
  (products) => products.filter((product) => product.is_redemption)
);

export const selectNotRedemptionProducts = createSelector(
  selectAllProducts,
  (products) => products.filter((product) => !product.is_redemption)
);
