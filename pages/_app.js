import "@/styles/globals.css";
import { Fragment } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  const isGuestGuard = Component.guestGuard || false;

  return (
    <Fragment>
      {isGuestGuard ? (
        <Component {...pageProps} />
      ) : (
        <>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </>
      )}
    </Fragment>
  );
}
