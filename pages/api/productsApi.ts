import axios from "axios";
import { CategoryProducts } from "../../src/models/categoryProducts";
import { Product } from "../../src/models/product";

export async function getAllProductsToExternal(): Promise<Product[]> {
  const response = await axios({ method: 'GET', baseURL: process.env.NEXT_PUBLIC_HOST_SERVER, url: '/products' });
  const data: any[] = await response.data;
  return data.map(item => new Product(item));
}

export async function getProductByCodeToExternal(code: string): Promise<Product> {
  const response = await axios({ method: 'GET', baseURL: process.env.NEXT_PUBLIC_HOST_SERVER, url: `/products/${code}` });  
  return new Product(response.data);
}

export async function getAllProductsByCategoryToExternal(limit: number = 6) {
  const response = await axios({
    method: 'GET',
    baseURL: process.env.NEXT_PUBLIC_HOST_SERVER,
    url: `/category/products?limit=${limit}`
  });
  const data: any[] = await response.data;
  return data.map(item => new CategoryProducts(item));
}

export async function getProductsByCategoryToExternal(code: number) {
  const response = await axios({ method: 'GET', baseURL: process.env.NEXT_PUBLIC_HOST_SERVER, url: `/category/${code}/products` });
  const data: any[] = await response.data;
  return data.length > 0 ? new CategoryProducts(data[0]) : null;
}

export async function postProduct(product: Product): Promise<Product> {
  const categoryData = await axios({ method: 'GET', baseURL: process.env.NEXT_PUBLIC_HOST_SERVER, url: `/category/${product.category}` });
  product.setCategory(categoryData.data._id);
  return await axios({
    method: 'POST',
    baseURL: process.env.NEXT_PUBLIC_HOST_SERVER,
    url: '/product',
    data: product.toJson(),
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  });
}

export async function getAllProducts() {
  let products: Product[] = [];
  products = await getAllProductsToExternal();
  return products.map((p: Product) => {
    return {
      params: {
        product: p.code
      }
    }
  });
}

export async function getProductsSimilar(): Promise<Product[]> {
  const products: Product[] = await getAllProductsToExternal();
  return products.splice(0, 6);
}

export async function getProduct(code: string): Promise<Product> {  
  return await getProductByCodeToExternal(code);  
}
