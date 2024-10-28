import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card, Button} from 'react-native-paper';
import {Product} from '../../type/type';

const ProductDetail = () => {
  const [data, setData] = useState<Product | null>(null);
  const filePath = 'https://dummyjson.com/products/2';

  useEffect(() => {
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(d => {
        setData(d);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  if (!data) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Card>
        <Card.Cover source={{uri: data.thumbnail}} style={styles.image} />
        <Card.Content>
          <Text style={styles.title}>Title: {data.title}</Text>
          <Text>Description: {data.description}</Text>
          <Text>Price: ${data.price}</Text>
          <Text>Discount: {data.discountPercentage}%</Text>
          <Text>Rating: {data.rating} stars</Text>
          <Text>Stock: {data.stock} units</Text>
          <Text>Brand: {data.brand}</Text>
          <Text>Category: {data.category}</Text>
        </Card.Content>
        <Card.Actions style={styles.actions}>
          <Button mode="contained" onPress={() => {}} style={styles.button}>
            Delete
          </Button>
          <Button mode="outlined" onPress={() => {}} style={styles.button}>
            Cancel
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 24,
    backgroundColor: '#f5f5f5',
  },
  image: {
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  actions: {
    justifyContent: 'space-between',
    marginTop: 16,
  },
  button: {
    width: 100,
  },
});

export default ProductDetail;
