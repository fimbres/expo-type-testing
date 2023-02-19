/**
 * @jest-environment jsdom
 */
import React from 'react'
import { Text } from 'react-native';
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { render, waitFor } from '@testing-library/react-native'

import { apiSlice, useGetProductsQuery } from './apiSlice'
import { selectNotRedemptionProducts, selectRedemptionProducts } from './productsSlice';
import { useSelector } from 'react-redux';

describe('apiSlice', () => {
  test('fetch data', async () => {
    function Data() {
      const { isError, isLoading, data } = useGetProductsQuery({});

      return (
        <>
          <Text testID="isLoading">isLoading: {String(isLoading)}</Text>
          <Text testID="isError">isError: {String(isError)}</Text>
          {data?.length > 0 && (
            <Text testID="data">{String(JSON.stringify(data))}</Text>
          )}
        </>
      )
    }

    const { getByText, getByTestId } = render(
      <ApiProvider api={apiSlice}>
        <Data />
      </ApiProvider>
    )

    await waitFor(() => {
        expect(getByText('isLoading: false')).toBeDefined();
    })

    expect(getByText('isError: false')).toBeDefined();
    expect(getByTestId('data')).toBeDefined();
  });

  test('filter data', async () => {
    function Data() {
      const { isLoading } = useGetProductsQuery({});
      const redemptionProducts = useSelector(selectRedemptionProducts);
      const notRedemptionProducts = useSelector(selectNotRedemptionProducts);

      return (
        <>
          <Text testID="isLoading">isLoading: {String(isLoading)}</Text>
          {redemptionProducts?.length > 0 && (
            <Text testID="redemptionProducts">{String(JSON.stringify(redemptionProducts))}</Text>
          )}
          {notRedemptionProducts?.length > 0 && (
            <Text testID="noRedemptionProducts">{String(JSON.stringify(notRedemptionProducts))}</Text>
          )}
        </>
      )
    }

    const { getByText, getByTestId } = render(
      <ApiProvider api={apiSlice}>
        <Data />
      </ApiProvider>
    )

    await waitFor(() => {
        expect(getByText('isLoading: false')).toBeDefined();
    })

    expect(getByTestId('redemptionProducts')).toBeDefined();
    expect(getByTestId('noRedemptionProducts')).toBeDefined();
  });
});
