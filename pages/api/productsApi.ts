import { Product } from "../../src/models/product";

const products = [
  new Product('Produto XYZ', 'R$ 60,00', '/mug_stropper.png', '111111'),
  new Product('Produto XYZ', 'R$ 60,00', '/lego_darth.png', '111112'),
  new Product('Produto XYZ', 'R$ 60,00', '/master_yoda.png', '111113'),
  new Product('Produto XYZ', 'R$ 60,00', '/stormtropper.png', '111114'),
  new Product('Produto XYZ', 'R$ 60,00', '/the_child.png', '111115'),
  new Product('Produto XYZ', 'R$ 60,00', '/kylo_ren.png', '111116'),
  new Product('Produto XYZ', 'R$ 60,00', '/xbox_control.png', '111117'),
  new Product('Produto XYZ', 'R$ 60,00', '/ps5.png', '111118'),
  new Product('Produto XYZ', 'R$ 60,00', '/nintendo.png', '111119'),
  new Product('Produto XYZ', 'R$ 60,00', '/switch_control.png', '111120'),
  new Product('Produto XYZ', 'R$ 60,00', '/xbox.png', '111121'),
  new Product('Produto XYZ', 'R$ 60,00', '/game_boy.png', '111122'),
  new Product('Produto XYZ', 'R$ 60,00', '/atari.png', '111123'),
  new Product('Produto XYZ', 'R$ 60,00', '/shirt_snes.png', '111124'),
  new Product('Produto XYZ', 'R$ 60,00', '/sonic.png', '111125'),
  new Product('Produto XYZ', 'R$ 60,00', '/retro.png', '111126'),
  new Product('Produto XYZ', 'R$ 60,00', '/ar.png', '111127'),
  new Product('Produto XYZ', 'R$ 60,00', '/pikachu.png', '111128')
];

export async function getProductsToExternal() {  
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_SERVER}product`);
  return response.json();    
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
