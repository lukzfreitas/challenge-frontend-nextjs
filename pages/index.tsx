import type { NextPage } from 'next'
import InputSearch from '../src/components/Inputs/InputSearch'

const HomePage: NextPage = () => {
  return (    
    <InputSearch id='search' placeholder='O que deseja encontrar?' iconUrl='/search.png' />
  )
}

export default HomePage
