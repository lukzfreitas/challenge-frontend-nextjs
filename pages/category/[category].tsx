import { GetStaticPaths, GetStaticProps } from "next";
import ProductListScreen from "../../src/screens/ProductListScreen";

const ProducList: any = ({ category }) => ProductListScreen(category);

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
                category: params.category,
            }
        }
    }
    return {
        props: {
            category: {},
        }
    };
}

export default ProducList;