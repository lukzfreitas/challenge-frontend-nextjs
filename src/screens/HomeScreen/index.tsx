import Head from 'next/head';
import { useRouter } from 'next/router';
import { Column } from '../../components/Grid/Column';
import AppBar from '../../components/Surfaces/AppBar';
import Banner from '../../components/Surfaces/Banner';
import FooterContact from '../../patterns/FooterContact';
import FooterDev from '../../patterns/FooterDev';
import ProductsList from '../../patterns/ProductsList';
import { useIntl } from "react-intl";
import { useEffect, useState } from 'react';
import { getAllProductsByCategoryToExternal } from '../../../pages/api/productsApi';
import ProductListLoader from '../../patterns/ProductListLoader';

const HomeScreen = () => {

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllProductsByCategoryToExternal().then((data) => {
      setData(data);
      setLoading(false);
    })
  }, []);

  const intl = useIntl();

  const router = useRouter();

  const title = intl.formatMessage({ id: "page.home.title" });
  const login = intl.formatMessage({ id: "page.home.buttonLogin" });

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Column>
        <AppBar buttonLabel={login} buttonFunction={() => router.push('login/login')} />
        <Banner />        
        {!isLoading ? <ProductsList categoryProducts={data} /> : <ProductListLoader/>}
        <FooterContact />
        <FooterDev />
      </Column>
    </>

  )
}

export default HomeScreen;
