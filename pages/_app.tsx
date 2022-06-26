import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen w-full bg-[#212429]">
      <div className="mx-auto max-w-[1440px]">
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  )
}

export default MyApp
