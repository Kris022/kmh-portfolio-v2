import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { Fragment } from "react";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}

export default MyApp;
