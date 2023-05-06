import { GetStaticPaths, GetStaticProps } from 'next';
import ProductDetailsScreen from '../../src/screens/ProductDetailsScreen';
import { Product } from '../../src/models/product';
import useProductApi from '../api/productsApi';

const ProductDetails: any = ({ product, productsSimiliar }: any) =>
  ProductDetailsScreen(product, productsSimiliar);

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { getProduct, getProductsSimilar } = useProductApi();
  const product: Product = await getProduct(params.product);
  const products: Product[] = await getProductsSimilar();
  if (product) {
    return {
      props: {
        product: product.toJson(),
        productsSimiliar: products.map((p) => p.toJson()),
      },
    };
  }
  return {
    props: {
      product: {},
    },
  };
};

export default ProductDetails;
