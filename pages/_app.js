import Nav from '../components/Nav';
import 'normalize.css/normalize.css';

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ backgroundColor: '#f9f9f9', height: '100vh' }}>
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
