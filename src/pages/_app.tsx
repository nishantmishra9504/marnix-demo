// import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '../scss/global.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Provider } from 'react-redux';
import { store } from '@/redux/store/store';

export default function App({ Component, pageProps }: AppProps) {
  return <Provider store={store}> <Component {...pageProps} /></Provider>
}
