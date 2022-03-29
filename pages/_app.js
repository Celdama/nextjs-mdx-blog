import Nav from '../components/Nav';
import 'normalize.css/normalize.css';
import { GlobalStyle } from './GlobalStyle';

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ backgroundColor: '#f9f9f9', height: '100vh' }}>
      <Nav />
      <Component {...pageProps} />
      <GlobalStyle />
    </div>
  );
}

export default MyApp;
