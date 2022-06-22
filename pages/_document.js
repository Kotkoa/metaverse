import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/*<title>Metaverse</title>*/}
          <meta name="description" content="Metaverse" />
          <link rel="icon" href="/favicon.ico" />
          <link href="../asset/fonts/Blantic.ttf" rel="stylesheet" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        </Head>
        <body className="font-poppins">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
