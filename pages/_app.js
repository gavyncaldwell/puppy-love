import '../public/globals.css'
import '../public/typography.css'

import NavBar from '../components/Nav'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
