// import '../styles/globals.css'

import { GlobalStyyled } from "../styles/globals"

function MyApp({ Component, pageProps }) {
  return (
    <><GlobalStyyled /><Component {...pageProps} /></>    
  )
}

export default MyApp
