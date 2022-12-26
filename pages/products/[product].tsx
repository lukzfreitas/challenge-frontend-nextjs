import { GetStaticPaths, GetStaticProps } from "next";
import ProductDetailsScreen from "../../src/screens/ProductDetailsScreen";
import { getProduct, getProductsSimilar } from "../api/productsApi";
import { Product } from "../../src/models/product";

const ProductDetails: any = ({ product, productsSimiliar }: any) => ProductDetailsScreen(product, productsSimiliar);  

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const product: Product = await getProduct(params.product);
  const products: Product[] = await getProductsSimilar();
  if (product) {
    return {
      props: {
        product: product.toJson(),
        productsSimiliar: products.map(p => p.toJson())
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
