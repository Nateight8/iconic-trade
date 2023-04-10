import Navbar from "@/components/navigation/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Footer from "@/components/footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </>
  );
}
