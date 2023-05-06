import axios from 'axios';
import { CategoryProducts } from '../../src/models/categoryProducts';
import { Product } from '../../src/models/product';
import { useSession } from 'next-auth/react';

const useProductApi = () => {
  const { data: session, status } = useSession();

  const headers = (isAuthenticated: boolean = false) => {
    const auth: any = session;
    if (status === 'authenticated' && isAuthenticated) {
      return {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${auth.accessToken}`,
      };
    }
    return { 'Content-Type': 'application/x-www-form-urlencoded' };
  };

  const createProductApi = async (product: Product): Promise<Product> => {
    const categoryData = await axios({
      method: 'GET',
      baseURL: process.env.NEXT_PUBLIC_HOST_SERVER,
      url: `/category/${product.category}`,
    });
    product.setCategory(categoryData.data._id);
    return await axios({
      method: 'POST',
      baseURL: process.env.NEXT_PUBLIC_HOST_SERVER,
      url: '/products',
      data: product.toJson(),
      headers: headers(true),
    });
  };

  const getAllProductsToExternal = async (): Promise<Product[]> => {
    const response = await axios({
      method: 'GET',
      baseURL: process.env.NEXT_PUBLIC_HOST_SERVER,
      url: '/products',
      headers: headers(),
    });
    const data: any[] = await response.data;
    return data.map((item) => new Product(item));
  };

  const getProductByCodeToExternal = async (code: string): Promise<Product> => {
    const response = await axios({
      method: 'GET',
      baseURL: process.env.NEXT_PUBLIC_HOST_SERVER,
      url: `/products/${code}`,
      headers: headers(),
    });
    return new Product(response.data);
  };

  const getAllProductsByCategoryToExternal = async (limit: number = 6) => {
    const response = await axios({
      method: 'GET',
      baseURL: process.env.NEXT_PUBLIC_HOST_SERVER,
      url: `/category/products?limit=${limit}`,
      headers: headers(),
    });
    const data: any[] = await response.data;
    return data.map((item) => new CategoryProducts(item));
  };

  const getProductsByCategoryToExternal = async (code: number) => {
    const response = await axios({
      method: 'GET',
      baseURL: process.env.NEXT_PUBLIC_HOST_SERVER,
      url: `/category/${code}/products`,
      headers: headers(),
    });
    const data: any[] = await response.data;
    return data.length > 0 ? new CategoryProducts(data[0]) : null;
  };

  const updateProductApi = async (product: Product): Promise<Product> => {
    const response = await axios({
      method: 'POST',
      baseURL: process.env.NEXT_PUBLIC_HOST_SERVER,
      url: `/products/update/${product._id}`,
      data: product.toJson(),
      headers: headers(true),
    });
    return new Product(response.data);
  };

  const deleteProductApi = async (product: Product): Promise<void> => {
    return await axios({
      method: 'POST',
      baseURL: process.env.NEXT_PUBLIC_HOST_SERVER,
      url: `/products/delete/${product._id}`,
      headers: headers()
    });
  };

  const getProductsSimilar = async (): Promise<Product[]> => {
    const products: Product[] = await getAllProductsToExternal();
    return products.splice(0, 6);
  };

  const getProduct = async (code: string): Promise<Product> => {
    return await getProductByCodeToExternal(code);
  };

  return {
    createProductApi,
    getAllProductsToExternal,
    getProductByCodeToExternal,
    getAllProductsByCategoryToExternal,
    getProductsByCategoryToExternal,
    updateProductApi,
    deleteProductApi,
    getProductsSimilar,
    getProduct,
  };
};

export default useProductApi;
