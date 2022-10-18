import { CategoryProducts } from "../../src/models/categoryProducts";
import { Product } from "../../src/models/product";

const products = [
  
];

export async function getAllProductsToExternal() {  
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_SERVER}category/products`);
  const data: any[] = await response.json();      
  return data.map(item => new CategoryProducts(item));  
}

export async function getProductsByCategoryToExternal(code: number) {  
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_SERVER}category/${code}/products`);
  const data: any[] = await response.json();  
  return data.length > 0 ? new CategoryProducts(data[0]) : null;
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
