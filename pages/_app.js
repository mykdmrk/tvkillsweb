import "../styles/globals.css";
import { useState, useEffect } from "react";
import PreLoader from "./components/PreLoader";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return <>{loading ? <PreLoader /> : <Component {...pageProps} />}</>;
}

export default MyApp;
