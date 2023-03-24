import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
    render() {
      return (
        <Html>
          <Head>
            {/* Add the Script component with the given props */}
            
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