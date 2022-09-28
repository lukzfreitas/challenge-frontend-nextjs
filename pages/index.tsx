import type { NextPage } from 'next'
import AppBar from '../src/components/Surfaces/AppBar'
import Banner from '../src/components/Surfaces/Banner'
import { Column, Row } from '../styles/globals'

const HomePage: NextPage = () => {
  return (
    <Column>    
      <AppBar />
      <Banner />
    </Column>

  )
}

export default HomePage
