import { createSelector } from "@reduxjs/toolkit";

import { apiSlice } from "./apiSlice";
import { IProduct } from "./types";

const initialState: IProduct[] = [];

const selectUsersResult = apiSlice.endpoints.getProducts.select({});

export const selectAllProducts = createSelector(
    selectUsersResult,
    productsResult => productsResult.data ?? initialState,
);

export const selectTotalPoints = createSelector(
    selectAllProducts,
    (products) => products.reduce((sum, product) => {
        if(product.is_redemption){
            return sum -= product.points;
        }
        else{
            return sum += product.points;
        }
    }, 0)
);

export const selectProductById = createSelector(
    selectAllProducts,
    (_: IProduct[], productId: number) => productId,
    (products, productId) => products.find(product => product.id == productId)
);

export const selectRedemptionProducts = createSelector(
  selectAllProducts,
  (products) => products.filter(product => product.is_redemption)
);

export const selectNotRedemptionProducts = createSelector(
    selectAllProducts,
    (products) => products.filter(product => !product.is_redemption)
);
