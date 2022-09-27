import type { NextPage } from 'next'
import Input from './src/components/Inputs/Input'

const HomePage: NextPage = () => {
  return (    
    <Input id='search' placeholder='O que deseja encontrar?' iconUrl='/search.png' />
  )
}

export default HomePage
