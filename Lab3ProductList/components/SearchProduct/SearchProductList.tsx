import React, {useState} from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import SearchProduct from './SearchProduct';
import ProductCard from '../ProductList/components/ProductCard';
import {Product} from '../../type/type';

const SearchProductList = () => {
  const [value, setValue] = useState('');
  const [search, setSearch] = useState('');
  const handleSearch = () => {
    setSearch(value);
  };
  const data = SearchProduct(search);
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 16}}>Search Products</Text>
      <TextInput
        style={styles.input}
        placeholder="Search a product"
        value={value}
        onChangeText={setValue}
      />
      <Button
        title="Search"
        onPress={() => {
          handleSearch();
        }}
      />

      <FlatList
        data={data}
        renderItem={({item}) => <ProductCard data={item} />}
        keyExtractor={(item: Product) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default SearchProductList;
