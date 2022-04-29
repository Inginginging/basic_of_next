import Layout from "../components/Layout";
import Nav from "../components/Nav";
import "../styles/globals.css"; //_app.js에서만 import 가능

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
