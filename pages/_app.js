import "@/styles/globals.css";
import { Fragment } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function App({ Component, pageProps }) {
  return(
  <Fragment>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
  </Fragment>);
}
