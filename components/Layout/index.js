import { Header } from '../Header'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen w-full bg-[#212429]">
      <div className="mx-auto max-w-[1440px]">
        <Header />
        <main>
          <div className="">{children}</div>
        </main>
      </div>
    </div>
  )
}
