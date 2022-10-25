import { GetStaticPaths, GetStaticProps } from "next";
import ProductScreen from "../products/product";

const ProductForm: any = ({ productForm }: any) => ProductScreen(productForm);

export const getStaticPaths: GetStaticPaths = () => {    
    return {
        paths: [],
        fallback: "blocking"
    }
}

export const getStaticProps: GetStaticProps = ({ params }: any) => {    
    if (params) {
        return {
            props: {
                productForm: params.productForm,
            }
        }
    }
    return {
        props: {
            productForm: {},
        }
    };
}

export default ProductForm;