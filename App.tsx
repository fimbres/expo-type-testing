import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ApiProvider } from '@reduxjs/toolkit/query/react';

import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import { apiSlice } from './stores/apiSlice';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ApiProvider api={apiSlice}>
        <SafeAreaProvider>
          <StatusBar style='dark' />
          <Navigation />
        </SafeAreaProvider>
      </ApiProvider>
    );
  }
}
