import Nav from '../components/Nav';
import 'normalize.css/normalize.css';
import { GlobalStyle } from './GlobalStyle';

function MyApp({ Component, pageProps }) {
  return (
    <div className='app'>
      <Nav />
      <Component {...pageProps} />
      <GlobalStyle />
    </div>
  );
}

export default MyApp;
