import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import PreLoader from "../src/layout/PreLoader";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Oxence - Web Design Company React NextJS Template</title>
        <link
          rel="shortcut icon"
          href="assets/images/favicon.png"
          type="image/x-icon"
        />
        <link rel="stylesheet" href="assets/css/flaticon.min.css" />

        <link
          href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@700&family=Merriweather:wght@700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Catamaran:wght@400;500;600&family=Kumbh+Sans:wght@400;500;700&family=Shadows+Into+Light&display=swap"
          rel="stylesheet"
        />

        {/* Font Awesome */}
       
      </Head>

      <link rel="stylesheet" href="assets/css/fontawesome-5.14.0.min.css" defer/>
        {/* Bootstrap */}
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" defer/>
        {/* Magnific Popup */}
        <link rel="stylesheet" href="assets/css/magnific-popup.min.css" defer  />
        {/* Nice Select */}
        <link rel="stylesheet" href="assets/css/nice-select.min.css" defer/>
        {/* Type Writer */}
        <link rel="stylesheet" href="assets/css/jquery.animatedheadline.css" defer />
        {/* Animate */}
        <link rel="stylesheet" href="assets/css/animate.min.css" defer/>
        {/* Slick */}
        <link rel="stylesheet" href="assets/css/slick.min.css" defer/>
        {/* Main Style */}
        <link rel="stylesheet" href="assets/css/style.css" />
      {load && <PreLoader />}
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
