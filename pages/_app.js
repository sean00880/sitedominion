import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import PreLoader from "../src/layout/PreLoader";
import "../styles/globals.css";
import Script from "next/script";

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

<link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />

        {/* Font Awesome */}
       
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
      <link href="assets/css/fontawesome-5.14.0.min.css" rel="stylesheet" />
        {/* Bootstrap */}
        
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
        <link rel="stylesheet" href="assets/css/style.css" defer />
      {load && <PreLoader />}
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
