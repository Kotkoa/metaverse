import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen w-full bg-[#212429]">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
