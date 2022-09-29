import type { NextPage } from 'next'
import AppBar from '../src/components/Surfaces/AppBar'
import Banner from '../src/components/Surfaces/Banner'
import { Product } from '../src/models/product'
import ListProducts from '../src/patterns/ListProducts'
import { Column, Row } from '../styles/globals'

const HomePage: NextPage = () => {

  const list = [
    new Product('Produto XYZ', 'R$ 60,00', '/mug_stropper.png'),
    new Product('Produto XYZ', 'R$ 60,00', '/lego_darth.png'),
    new Product('Produto XYZ', 'R$ 60,00', '/master_yoda.png'),
    new Product('Produto XYZ', 'R$ 60,00', '/stormtropper.png'),
    new Product('Produto XYZ', 'R$ 60,00', '/the_child.png')
  ]

  return (
    <Column>    
      <AppBar />
      <Banner />
      <ListProducts list={list}/>
    </Column>

  )
}

export default HomePage
