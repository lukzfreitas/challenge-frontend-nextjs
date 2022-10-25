import axios from "axios";
import { CategoryProducts } from "../../src/models/categoryProducts";
import { Product } from "../../src/models/product";

const products = [

];

export async function getAllProductsToExternal() {
  const response = await axios({ method: 'GET', baseURL: process.env.NEXT_PUBLIC_HOST_SERVER, url: '/category/products' });
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

export function getAllProducts() {
  return products.map((p: Product) => {
    return {
      params: {
        product: p.code
      }
    }
  });
}

export function getProductsSimilar(): Product[] {
  return products.splice(0, 6);
}


export function getProduct(code: string): Product {
  const listProducts = products.filter(p => p.code == code);
  if (listProducts.length > 0) {
    return listProducts[0];
  }
  return products[0];
}
