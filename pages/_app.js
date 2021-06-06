import '../styles/index.scss';
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";


function MyApp({ Component, pageProps }) {
  return (
      <>
          <Navbar/>
          <Component {...pageProps} />
          <Footer/>
      </>
  )
}

export default MyApp
