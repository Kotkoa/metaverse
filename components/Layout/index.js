import { Header } from '../../components/Header'

export default function Layout({ children }) {
  return (
    <div className="mx-auto max-w-[1440px]">
      <Header />
      <div>{children}</div>
    </div>
  )
}
