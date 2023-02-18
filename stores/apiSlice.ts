import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IProduct } from './types';

export const apiSlice = createApi({
    reducerPath: 'api',
    tagTypes: ['Product'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://6222994f666291106a29f999.mockapi.io/api/v1'
    }),
    endpoints: builder => ({
        getProducts: builder.query({
            query: () => '/products',
            transformResponse: loadedProducts => {
                return loadedProducts as IProduct[];
            }
        })
    })
});

export const { useGetProductsQuery } = apiSlice;
