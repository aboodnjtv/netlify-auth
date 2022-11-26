import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }:any) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp