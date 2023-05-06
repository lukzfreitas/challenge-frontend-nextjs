import { useState } from 'react';
import { Product } from '../models/product';
import useProductApi from '../../pages/api/productsApi';
import { CategoryProducts } from '../models/categoryProducts';

interface useProductsProps {
  products: Product[];
  categoryProducts: CategoryProducts;
  isLoading: boolean;
  deleteProduct: (product: Product) => {};
  getCategoriesProducts: (code: number) => {};
}

export const useProducts = (productsProps?: Product[]): useProductsProps => {
  const [isLoading, setLoading] = useState(true);
  const [products, setProducts]: [Product[], Function] = useState(productsProps);
  const [categoryProducts, setCategoriesProducts]: [CategoryProducts, Function] = useState(null);
  const { deleteProductApi, getProductsByCategoryToExternal } = useProductApi();

  const deleteProduct = async (product: Product) => {
    try {
      setLoading(true);
      await deleteProductApi(product);
      setProducts(products.filter((item) => item._id != product._id));
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const getCategoriesProducts = async (code: number) => {
    try {      
      setLoading(true);
      const response = await getProductsByCategoryToExternal(code)
      setCategoriesProducts(response);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return { products, categoryProducts, isLoading, getCategoriesProducts, deleteProduct };
};
