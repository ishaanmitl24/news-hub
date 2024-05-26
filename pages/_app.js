import "@/styles/globals.css";
import { Fragment, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isGuestGuard = Component.guestGuard || false;
  const isAuthGuard = Component.authGuard || false;

  useEffect(() => {
    const isAuthenticated = Boolean(localStorage.getItem("token")); // Example check

    if (isAuthGuard && !isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthGuard, router]);

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
