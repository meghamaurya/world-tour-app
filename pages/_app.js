import '@/styles/globals.css'
import Navbar from './nav'

export default function App({ Component, pageProps }) {
  return (
    <Navbar>
      <Component {...pageProps} />
    </Navbar>
  )
}
