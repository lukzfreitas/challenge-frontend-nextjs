import { useProducts } from '../../hooks/useProducts';
import { Product } from '../../models/product';
import { ProductCard } from '../ProductCard';
import { GridProductsStyled } from '../ProductsList/styled';

interface ProductsProps {
  products: Product[];
}

const Products = (props: ProductsProps) => {
  const { products, deleteProduct } = useProducts(props.products);

  return (
    <GridProductsStyled>
      {products.map((product: Product) => (
        <ProductCard key={product._id} product={product} onDeleteProduct={(product) => deleteProduct(product)} />
      ))}
    </GridProductsStyled>
  );
};  

export default Products;
