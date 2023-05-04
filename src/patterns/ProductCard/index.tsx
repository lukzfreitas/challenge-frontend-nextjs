import Card from '../../components/Surfaces/Card';
import { Product } from '../../models/product';
import { currency } from '../../utils/currency';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import { useProduct } from '../../hooks/useProduct';
import CardLoading from '../../components/Surfaces/CardLoading';

interface ProductCardProps {
  product: Product;
  onDeleteProduct?: (product: Product) => {};
}

export const ProductCard = (props: ProductCardProps) => {
  const router = useRouter();

  const intl = useIntl();

  const seeProduct = intl.formatMessage({ id: 'page.home.seeProduct' });

  const {
    product,
    isLoading,
    setName,
    setPrice,
    updateProduct,
    setCancelChanges,
  } = useProduct(props.product);

  return !isLoading ? (
    <Card
      key={product._id}
      image={product.image}
      label1={product.name}
      label2={currency(product.price)}
      link={seeProduct}
      onClick={() => router.push(`/products/${product.code}`)}
      onDelete={() => props.onDeleteProduct(product)}
      onEdit={() => updateProduct(product)}
      onCancel={() => setCancelChanges()}
      onChangeLabel1={(value: string) => setName(value)}
      onChangeLabel2={(value: string) => setPrice(value)}
    ></Card>
  ) : (
    <CardLoading />
  );
};
