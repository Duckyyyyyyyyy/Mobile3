import React, { useState } from 'react';
import { Text, TextInput, Button, StyleSheet, Alert, ScrollView } from 'react-native';

const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [rating, setRating] = useState('');
  const [stock, setStock] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [images, setImages] = useState('');

  const handleSubmit = () => {
    fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        description,
        price,
        discountPercentage,
        rating,
        stock,
        brand,
        category,
        images,
      }),
    })
      .then((res) => res.json())
      .then(console.log)
      .catch(console.error);

    Alert.alert('Add successful');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Add a Product</Text>
      
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter title"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter description"
        value={description}
        onChangeText={setDescription}
      />

      <Text style={styles.label}>Price</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Discount Percentage</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter discount percentage"
        value={discountPercentage}
        onChangeText={setDiscountPercentage}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Rating</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter rating"
        value={rating}
        onChangeText={setRating}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Stock</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter stock"
        value={stock}
        onChangeText={setStock}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Brand</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter brand"
        value={brand}
        onChangeText={setBrand}
      />

      <Text style={styles.label}>Category</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter category"
        value={category}
        onChangeText={setCategory}
      />

      <Text style={styles.label}>Images</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter images URL(s)"
        value={images}
        onChangeText={setImages}
      />

      <Button title="SUBMIT" onPress={handleSubmit} color="#007bff" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#007bff',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
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

export default AddProduct;
