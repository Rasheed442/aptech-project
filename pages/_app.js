import Footer from '../component/footer'
import Navbar from '../component/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar/>
  <Component {...pageProps} />
  {/* <Footer /> */}
  </div>
  )
}

export default MyApp
