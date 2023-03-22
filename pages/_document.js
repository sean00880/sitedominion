import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <Script src="assets/css/fontawesome-5.14.0.min.css" strategy="defer" />
          <Script src="assets/css/bootstrap.min.css" strategy="defer" />
          <Script src="assets/css/magnific-popup.min.css" strategy="defer" />
          <Script src="assets/css/nice-select.min.css" strategy="defer" />
          <Script src="assets/css/jquery.animatedheadline.css" strategy="defer" />
          <Script src="assets/css/animate.min.css" strategy="defer" />
          <Script src="assets/css/slick.min.css" strategy="defer" />
          <link  rel="stylesheet" href="assets/css/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;