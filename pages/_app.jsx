import "../styles/globals.css";
import NavBar from '../components/NavBar';
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
    <NavBar />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
