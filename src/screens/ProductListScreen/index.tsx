import Head from 'next/head';
import { Column } from '../../components/Grid/Column';
import AppBar from '../../components/Surfaces/AppBar';
import FooterContact from '../../patterns/FooterContact';
import FooterDev from '../../patterns/FooterDev';
import ProductsList from '../../patterns/ProductsList';
import { useIntl } from 'react-intl';
import { useEffect, useState } from 'react';
import ProductListLoader from '../../patterns/ProductListLoader';
import { useProducts } from '../../hooks/useProducts';

const ProductListScreen = (code: number) => {
  const intl = useIntl();

  const allProducts = intl.formatMessage({ id: 'page.products.allProducts' });
  const addProduct = intl.formatMessage({ id: 'page.products.addProduct' });
  const loading = intl.formatMessage({ id: 'page.products.loading' });

  const { categoryProducts, isLoading, getCategoriesProducts } = useProducts();

  useEffect(() => {
    getCategoriesProducts(code);
  }, [code, getCategoriesProducts]);

  return (
    <>
      <Head>
        <title>{isLoading ? `${loading}...` : categoryProducts?.name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Column>
        <AppBar />
        {categoryProducts == null ? (
          <ProductListLoader />
        ) : (
          <ProductsList
            productsList={categoryProducts.products}
            title={allProducts}
            buttonLabel={addProduct}
            codeCategory={code}
          />
        )}
        <FooterContact />
        <FooterDev />
      </Column>
    </>
  );
};

export default ProductListScreen;
