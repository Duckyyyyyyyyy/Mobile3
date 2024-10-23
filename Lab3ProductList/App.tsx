import React from 'react';
import ProductList from './components/ProductList/ProductList';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <ProductList />
    </SafeAreaProvider>
  );
};

export default App;
