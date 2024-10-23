import React, {useEffect, useState} from 'react';
import {Appbar} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProductCard from './components/ProductCard';
import {FlatList, StatusBar, StyleSheet} from 'react-native';
import { Product } from '../../type/type';

const ProductList = () => {
  const [data, setData] = useState([]);
  const filePath = 'https://dummyjson.com/products/';

  useEffect(() => {
    fetch(filePath)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((d: any) => {
        setData(d.products);
      })
      .catch((err: any) => {
        console.error('Error fetching data: ', err);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Product List" />
      </Appbar.Header>
      <FlatList
        data={data}
        renderItem={({item}) => <ProductCard data={item} />}
        keyExtractor={(item: Product) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default ProductList;
