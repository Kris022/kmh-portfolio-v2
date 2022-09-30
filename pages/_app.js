import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { Fragment } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Navbar />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
