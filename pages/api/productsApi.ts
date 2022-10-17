import { Product } from "../../src/models/product";

const products = [
  
];

export async function getProductsToExternal() {  
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_SERVER}category/products`);
  const data: any = response.json();    
  return data;
  // return data.map(item => CategoryProducts(item));
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
