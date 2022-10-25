import { GetStaticPaths, GetStaticProps } from "next";
import ProductDetailsScreen from "../../src/screens/ProductDetailsScreen";
import { getAllProducts, getProduct, getProductsSimilar } from "../api/productsApi";

const ProductDetails: any = async ({ product }: any) => ProductDetailsScreen(product, await getProductsSimilar());

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking'
  }  
}

export const getStaticProps: GetStaticProps = ({ params }: any) => {  
  const product = getProduct(params.product);
  if (product) {
    return {
      props: {
        product: product,
      }
    }
  }
  return {
    props: {
      product: {},
    }
  };
}

export default ProductDetails;