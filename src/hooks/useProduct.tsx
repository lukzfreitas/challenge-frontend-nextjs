import { useEffect, useState } from 'react';
import {
  deleteProductApi,
  getAllProductsByCategoryToExternal,
  updateProductApi,
} from '../../pages/api/productsApi';
import { CategoryProducts } from '../models/categoryProducts';
import { Product } from '../models/product';

interface useListProductsCategoryProps {
  categoriesProduct: CategoryProducts[];
  isLoading: boolean;
}

export const useListProductsCategory = (
  categoriesProductProps?: CategoryProducts[],
): useListProductsCategoryProps => {
  const [categoriesProduct, setCategoriesProduct]: [
    CategoryProducts[],
    Function,
  ] = useState(categoriesProductProps);
  const [isLoading, setLoading] = useState(false);

  const getAllProductsByCategory = async () => {
    setLoading(true);
    const products = await getAllProductsByCategoryToExternal();
    setCategoriesProduct(products);
    setLoading(false);
  };

  useEffect(() => {
    getAllProductsByCategory();
  }, []);

  return { categoriesProduct, isLoading };
};

interface useProductProps {
  product: Product;
  isLoading: boolean;
  setName: Function;
  setPrice: Function;
  setCancelChanges: Function;
  updateProduct: (product: Product) => {};
}

export const useProduct = (productToUpdate: Product): useProductProps => {
  const [isLoading, setLoading] = useState(false);
  const [product, setProduct] = useState(productToUpdate);
  const [productOriginal, setProductOriginal] = useState(productToUpdate);

  // call api external

  const updateProduct = async () => {
    setLoading(true);
    const productUpdated = await updateProductApi(product);    
    productUpdated.setImage(product.image);
    setProduct(productUpdated);
    setLoading(false);
  };

  // change state of product

  const setCancelChanges = () => {
    setProduct(productOriginal);
  };

  const setName = (name: string): void => {
    product.name = name;
    setProduct(product);
  };

  const setPrice = (price: string): void => {
    product.price = Number.parseInt(price);
    setProduct(product);
  };

  return { product, isLoading, setName, setPrice, updateProduct, setCancelChanges };
};
