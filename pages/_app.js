import Head from "next/head";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="appContainer">
      <Navbar />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          id="favicon"
          href="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20100%20100%22%3E%3Ccircle%20cx=%2250%22%20cy=%2250%22%20r=%2250%22%20fill=%22rgb(250,%2087,%2061)%22/%3E%3C/svg%3E"
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
