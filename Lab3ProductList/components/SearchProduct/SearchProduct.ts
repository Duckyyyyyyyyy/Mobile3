/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";


let filePath = 'https://dummyjson.com/products/';

const SearchProduct = (value:string) => {
  const [data, setData] = useState([]);
  if (value != '') {
    filePath = 'https://dummyjson.com/products/search?q=' + value;
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data.products);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }
  return data;
};

export default SearchProduct;
