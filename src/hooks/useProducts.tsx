import { useState } from 'react';
import { Product } from '../models/product';
import { deleteProductApi } from '../../pages/api/productsApi';

interface useProductsProps {
  products: Product[];
  deleteProduct: (product: Product) => {};
}

export const useProducts = (productsProps: Product[]): useProductsProps => {
  const [isLoading, setLoading] = useState(false);
  const [products, setProducts] = useState(productsProps);

  const deleteProduct = async (product: Product) => {    
    try {
      setLoading(true);
      await deleteProductApi(product);      
      setProducts(products.filter(item => item._id != product._id));
      setLoading(false);
    } catch (error) {
      console.error(error); 
    }
  };

  return { products, deleteProduct };
};
