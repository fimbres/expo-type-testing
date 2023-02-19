/**
 * @jest-environment jsdom
 */
import React from 'react'
import { Text } from 'react-native';
import { render, waitFor } from '@testing-library/react-native'

import useCachedResources from './useCachedResources';

describe('useCachedResources', () => {
  test('load resources correctly', async () => {
    function App() {
      const isLoadingComplete = useCachedResources();

      if (!isLoadingComplete) {
        return null;
      } else {
        return (
          <Text testID='loaded'>Loaded</Text>
        );
      }
    }

    const { getByTestId } = render(<App />);

    await waitFor(() => {
        expect(getByTestId('loaded')).toBeDefined();
    });
  });
});
