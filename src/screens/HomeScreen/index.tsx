import Head from 'next/head';
import { useRouter } from 'next/router';
import { Column } from '../../components/Grid/Column';
import AppBar from '../../components/Surfaces/AppBar';
import Banner from '../../components/Surfaces/Banner';
import { Product } from '../../models/product';
import { ThemeProduct } from '../../models/themeProduct';
import FooterContact from '../../patterns/FooterContact';
import FooterDev from '../../patterns/FooterDev';
import ProductsList from '../../patterns/ProductsList';

const HomeScreen = () => {
  const listThemeProduct = [
    new ThemeProduct(
      'Star Wars',
      [
        new Product('Produto XYZ', 'R$ 60,00', '/mug_stropper.png', '111111'),
        new Product('Produto XYZ', 'R$ 60,00', '/lego_darth.png', '111112'),
        new Product('Produto XYZ', 'R$ 60,00', '/master_yoda.png', '111113'),
        new Product('Produto XYZ', 'R$ 60,00', '/stormtropper.png', '111114'),
        new Product('Produto XYZ', 'R$ 60,00', '/the_child.png', '111115'),
        new Product('Produto XYZ', 'R$ 60,00', '/kylo_ren.png', '111116')
      ]
    ),
    new ThemeProduct(
      'Consoles',
      [
        new Product('Produto XYZ', 'R$ 60,00', '/xbox_control.png', '111117'),
        new Product('Produto XYZ', 'R$ 60,00', '/ps5.png', '111118'),
        new Product('Produto XYZ', 'R$ 60,00', '/nintendo.png', '111119'),
        new Product('Produto XYZ', 'R$ 60,00', '/switch_control.png', '111120'),
        new Product('Produto XYZ', 'R$ 60,00', '/xbox.png', '111121'),
        new Product('Produto XYZ', 'R$ 60,00', '/game_boy.png', '111122')
      ]
    ),
    new ThemeProduct(
      'Diversos',
      [
        new Product('Produto XYZ', 'R$ 60,00', '/atari.png', '111123'),
        new Product('Produto XYZ', 'R$ 60,00', '/shirt_snes.png', '111124'),
        new Product('Produto XYZ', 'R$ 60,00', '/sonic.png', '111125'),
        new Product('Produto XYZ', 'R$ 60,00', '/retro.png', '111126'),
        new Product('Produto XYZ', 'R$ 60,00', '/ar.png', '111127'),
        new Product('Produto XYZ', 'R$ 60,00', '/pikachu.png', '111128')
      ]
    )
  ];

  const router = useRouter();

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Column>
        <AppBar buttonLabel='Login' buttonFunction={() => router.push('login/login')} />
        <Banner />
        <ProductsList listThemeProduct={listThemeProduct} />
        <FooterContact />
        <FooterDev devName="Desenvolvido por Lucas Freitas" year='2022' />
      </Column>
    </>

  )
}

export default HomeScreen;
