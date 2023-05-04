import Head from 'next/head';
import { useRouter } from 'next/router';
import { Column } from '../../components/Grid/Column';
import AppBar from '../../components/Surfaces/AppBar';
import Banner from '../../components/Surfaces/Banner';
import FooterContact from '../../patterns/FooterContact';
import FooterDev from '../../patterns/FooterDev';
import ProductsList from '../../patterns/ProductsList';
import { useIntl } from 'react-intl';
import ProductListLoader from '../../patterns/ProductListLoader';
import { signOut, useSession } from 'next-auth/react';
import { useListProductsCategory } from '../../hooks/useProduct';

const HomeScreen = () => {
  const { data: session, status } = useSession();
  const { categoriesProduct, isLoading } = useListProductsCategory();

  const intl = useIntl();

  const router = useRouter();

  const title = intl.formatMessage({ id: 'page.home.title' });
  const login = intl.formatMessage({ id: 'page.home.buttonLogin' });
  const logout = intl.formatMessage({ id: 'page.home.buttonLogout' });

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Column>
        <AppBar
          buttonLabel={status === 'authenticated' ? logout : login}
          buttonFunction={() =>
            status === 'authenticated' ? signOut() : router.push('/login/login')
          }
        />
        <Banner />
        {!isLoading ? (
          <ProductsList categoryProducts={categoriesProduct} />
        ) : (
          <ProductListLoader />
        )}
        <FooterContact />
        <FooterDev />
      </Column>
    </>
  );
};

export default HomeScreen;
