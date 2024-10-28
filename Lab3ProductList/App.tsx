import React, {useState} from 'react';
import ProductList from './components/ProductList/ProductList';
import {BottomNavigation} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AddProduct from './components/AddProduct/AddProduct';
import SearchProductList from './components/SearchProduct/SearchProductList';
import ProductDetail from './components/ProductDetail/ProductDetail';

const App = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'ProductList', title: 'Products', focusedIcon: 'folder'},
    {key: 'AddProduct', title: 'Add Product', focusedIcon: 'plus-circle'},
    {key: 'SearchProduct', title: 'Search Product', focusedIcon: 'magnify'},
    {key: 'ProductDetail', title: 'Product Detail', focusedIcon: 'information'},
  ]);

  const renderScene = ({route}: {route: {key: string}}) => {
    switch (route.key) {
      case 'ProductList':
        return <ProductList />;
      case 'AddProduct':
        return <AddProduct />;
      case 'SearchProduct':
        return <SearchProductList/>;
      case 'ProductDetail':
        return <ProductDetail/>
      default:
        return null;
    }
  };

  return (
    <>
      <SafeAreaProvider>
        <BottomNavigation
          navigationState={{index, routes}}
          onIndexChange={setIndex}
          renderScene={renderScene}
        />
      </SafeAreaProvider>
    </>
  );
};

export default App;
