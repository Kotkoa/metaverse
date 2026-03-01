import { Header } from '../../components/Header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-[1440px]">
      <Header />
      <div>{children}</div>
    </div>
  )
}
