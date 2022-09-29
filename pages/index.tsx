import type { NextPage } from 'next'
import AppBar from '../src/components/Surfaces/AppBar'
import Banner from '../src/components/Surfaces/Banner'
import Card from '../src/components/Surfaces/Card'
import { Column, Row } from '../styles/globals'

const HomePage: NextPage = () => {
  return (
    <Column>    
      <AppBar />
      <Banner />
      <Card />
    </Column>

  )
}

export default HomePage
