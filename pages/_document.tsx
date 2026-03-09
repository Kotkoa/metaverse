import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Explore and trade unique NFT game cards in the Metaverse marketplace. Discover rare collectibles, bid on items, and start your gaming journey." />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kotkoa.github.io/metaverse/" />
        <meta property="og:title" content="Metaverse — NFT Marketplace" />
        <meta property="og:description" content="Explore and trade unique NFT game cards in the Metaverse marketplace. Discover rare collectibles, bid on items, and start your gaming journey." />
        <meta property="og:image" content="https://kotkoa.github.io/metaverse/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Metaverse — NFT Marketplace" />
        <meta name="twitter:description" content="Explore and trade unique NFT game cards in the Metaverse marketplace. Discover rare collectibles, bid on items, and start your gaming journey." />
        <meta name="twitter:image" content="https://kotkoa.github.io/metaverse/og-image.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="font-poppins">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
