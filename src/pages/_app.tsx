import { AppProps } from 'next/app'
import { Header } from '../components/Header'
// SESSÃO / LOGIN?
import {Provider as NextAuthProvider} from 'next-auth/client'

/*------------- ESTILOS GLOBAIS ------------*/
import '../styles/global.scss'

function MyApp({ Component, pageProps }) {
  return(
    <NextAuthProvider session={pageProps.session}>
    <Header />
    <Component {...pageProps} />
    </NextAuthProvider>
  )
}

export default MyApp
