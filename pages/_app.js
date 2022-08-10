import '../styles/globals.css'
import Link from "next/link";
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Component {...pageProps} />
        <Footer />
      </>
  )
}

export default MyApp
