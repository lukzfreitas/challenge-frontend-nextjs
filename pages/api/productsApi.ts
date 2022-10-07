import { Product } from "../../src/models/product";

const products = [
  new Product('Produto XYZ', 'R$ 60,00', '/mug_stropper.png', '111111'),
  new Product('Produto XYZ', 'R$ 60,00', '/lego_darth.png', '111111'),
  new Product('Produto XYZ', 'R$ 60,00', '/master_yoda.png', '111111'),
  new Product('Produto XYZ', 'R$ 60,00', '/stormtropper.png', '111111'),
  new Product('Produto XYZ', 'R$ 60,00', '/the_child.png', '111111'),
  new Product('Produto XYZ', 'R$ 60,00', '/kylo_ren.png', '111111'),
  new Product('Produto XYZ', 'R$ 60,00', '/xbox_control.png', '111111'),
  new Product('Produto XYZ', 'R$ 60,00', '/ps5.png', '111111'),
  new Product('Produto XYZ', 'R$ 60,00', '/nintendo.png', '111111'),
  new Product('Produto XYZ', 'R$ 60,00', '/switch_control.png', '111111'),
  new Product('Produto XYZ', 'R$ 60,00', '/xbox.png', '111111'),
  new Product('Produto XYZ', 'R$ 60,00', '/game_boy.png', '111111'),
  new Product('Produto XYZ', 'R$ 60,00', '/atari.png', '111111'),
  new Product('Produto XYZ', 'R$ 60,00', '/shirt_snes.png', '111111'),
  new Product('Produto XYZ', 'R$ 60,00', '/sonic.png', '111111'),
  new Product('Produto XYZ', 'R$ 60,00', '/retro.png', '111111'),
  new Product('Produto XYZ', 'R$ 60,00', '/ar.png', '111111'),
  new Product('Produto XYZ', 'R$ 60,00', '/pikachu.png', '111111')
];

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
