import { GetStaticPaths, GetStaticProps } from "next";
import ProductDetailsScreen from "../../src/screens/ProductDetailsScreen";
import { getAllProducts, getProduct, getProductsSimilar } from "../api/productsApi";

const ProductDetails: any = ({ product }: any) => ProductDetailsScreen(product, getProductsSimilar());


export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllProducts();
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = ({ params }: any) => {  
  console.log(params.product);
  const product = getProduct(params.product);
  console.log(product)
  if (product) {
    return {
      props: {
        product: product.toJson(),
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