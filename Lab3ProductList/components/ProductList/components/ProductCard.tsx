/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Product} from '../../../type/type';
import { Card} from 'react-native-paper';

interface ProductCardProps {
  data: Product;
}
const ProductCard = (props: ProductCardProps) => {
  const {data} = props;

  if (!data) {
    return <Text>No Data</Text>;
  }

  return (
    <SafeAreaView>
      <Card style={styles.item}>
        <View style={styles.contentContainer}>
          <Image style={styles.productImage} source={{uri: data.thumbnail}} />
          <View style={styles.textContainer}>
            <Card.Title
              title={
                <Text style={{fontWeight: '600', fontSize: 12}}>
                  Title: {data.title}
                </Text>
              }
            />
            <Card.Content>
              <Text style={{fontSize: 10}}>
                Description: {data.description}
              </Text>
              <Text style={{fontSize: 10}}>Price: {data.price}</Text>
              <Text style={{fontSize: 10, color: 'green'}}>
                Discount: {data.discountPercentage}% off
              </Text>
              <Text style={{fontSize: 10}}>Rating: {data.rating}</Text>
              <Text style={{fontSize: 10}}>Stock: {data.stock}</Text>
              <Text style={{fontSize: 10}}>Brand: {data.brand}</Text>
              <Text style={{fontSize: 10}}>Category: {data.category}</Text>
            </Card.Content>
            <View style={styles.buttonContainer}>
              <Button title="Detail" onPress={()=>{}}/>
              <Button title="Add" onPress={()=>{}}/>
              <Button title="Delete" onPress={()=>{}}/>
            </View>
          </View>
        </View>
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    backgroundColor: '#deefee',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:8,
  },
  button: {
    backgroundColor: '#1976D2',
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
});

export default ProductCard;
