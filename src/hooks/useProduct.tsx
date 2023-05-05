import { useState } from 'react';
import useProductApi from '../../pages/api/productsApi';
import { CategoryProducts } from '../models/categoryProducts';
import { Product } from '../models/product';

interface useListProductsCategoryProps {
  categoriesProduct: CategoryProducts[];
  isLoading: boolean;
  getAllProductsByCategory: Function;
}

export const useListProductsCategory = (
  categoriesProductProps?: CategoryProducts[],
): useListProductsCategoryProps => {
  const [categoriesProduct, setCategoriesProduct]: [
    CategoryProducts[],
    Function,
  ] = useState(categoriesProductProps);
  const [isLoading, setLoading] = useState(false);
  const { getAllProductsByCategoryToExternal } = useProductApi();

  const getAllProductsByCategory = async () => {
    setLoading(true);    
    const products = await getAllProductsByCategoryToExternal();
    setCategoriesProduct(products);
    setLoading(false);    
  };  

  return { categoriesProduct, isLoading, getAllProductsByCategory };
};

interface useProductProps {
  product: Product;
  isLoading: boolean;
  setName: Function;
  setPrice: Function;
  setCancelChanges: Function;
  createProduct: (product: Product) => {};
  updateProduct: (product: Product) => {};
}

export const useProduct = (productToUpdate?: Product): useProductProps => {
  const [isLoading, setLoading] = useState(false);
  const [product, setProduct] = useState(productToUpdate);
  const [productOriginal, _] = useState(productToUpdate);
  const { createProductApi, updateProductApi } = useProductApi();

  const updateProduct = async () => {
    setLoading(true);
    const productUpdated = await updateProductApi(product);
    setProduct(productUpdated);
    setLoading(false);
  };

  const createProduct = async (product: Product) => {
    setLoading(true);
    await createProductApi(product);
    setLoading(false);
  };

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

  return {
    product,
    isLoading,
    setName,
    setPrice,
    createProduct,
    updateProduct,
    setCancelChanges,
  };
};
