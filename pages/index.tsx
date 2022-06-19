// import Head from 'next/head'

import Header from '../components/Header/index'

function HomePage() {
  return (
    <div>
      <head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Metaverse</title>
      </head>
      <main className="flex min-h-screen w-full flex-col bg-[#212429]">
        <Header />
      </main>
    </div>
  )
}

export default HomePage
