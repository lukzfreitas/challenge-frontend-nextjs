import type { NextPage } from 'next'
import { Column } from '../src/components/Grid/Column'
import AppBar from '../src/components/Surfaces/AppBar'
import Banner from '../src/components/Surfaces/Banner'
import { Product } from '../src/models/product'
import { ThemeProduct } from '../src/models/themeProduct'
import FooterContact from '../src/patterns/FooterContact'
import FooterDev from '../src/patterns/FooterDev'
import ProductsList from '../src/patterns/ProductsList'

const HomePage: NextPage = () => {

  const listThemeProdutc: ThemeProduct[] = [
    new ThemeProduct(
      'Star Wars',
      [
        new Product('Produto XYZ', 'R$ 60,00', '/mug_stropper.png'),
        new Product('Produto XYZ', 'R$ 60,00', '/lego_darth.png'),
        new Product('Produto XYZ', 'R$ 60,00', '/master_yoda.png'),
        new Product('Produto XYZ', 'R$ 60,00', '/stormtropper.png'),
        new Product('Produto XYZ', 'R$ 60,00', '/the_child.png'),
        new Product('Produto XYZ', 'R$ 60,00', '/kylo_ren.png')
      ]
    ),
    new ThemeProduct(
      'Consoles',
      [
        new Product('Produto XYZ', 'R$ 60,00', '/xbox_control.png'),
        new Product('Produto XYZ', 'R$ 60,00', '/ps5.png'),
        new Product('Produto XYZ', 'R$ 60,00', '/nintendo.png'),
        new Product('Produto XYZ', 'R$ 60,00', '/switch_control.png'),
        new Product('Produto XYZ', 'R$ 60,00', '/xbox.png'),
        new Product('Produto XYZ', 'R$ 60,00', '/game_boy.png')
      ]
    ),
    new ThemeProduct(
      'Diversos',
      [
        new Product('Produto XYZ', 'R$ 60,00', '/atari.png'),        
        new Product('Produto XYZ', 'R$ 60,00', '/shirt_snes.png'),
        new Product('Produto XYZ', 'R$ 60,00', '/sonic.png'),
        new Product('Produto XYZ', 'R$ 60,00', '/retro.png'),
        new Product('Produto XYZ', 'R$ 60,00', '/ar.png'),
        new Product('Produto XYZ', 'R$ 60,00', '/pikachu.png')
      ]
    )
  ]

  return (
    <Column>
      <AppBar />
      <Banner />
      <ProductsList listThemeProdutc={listThemeProdutc} />
      <FooterContact />
      <FooterDev devName="Desenvolvido por Lucas Freitas" year='2022'/>
    </Column>

  )
}

export default HomePage
