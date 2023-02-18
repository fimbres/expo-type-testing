import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { RootSiblingParent } from 'react-native-root-siblings';

import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import { apiSlice } from './slices/apiSlice';
import { Loader } from './components';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return <Loader />;
  } else {
    return (
      <ApiProvider api={apiSlice}>
        <SafeAreaProvider>
          <RootSiblingParent>
            <StatusBar style='dark' />
            <Navigation />
          </RootSiblingParent>
        </SafeAreaProvider>
      </ApiProvider>
    );
  }
}
