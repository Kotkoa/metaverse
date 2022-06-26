import Link from 'next/link'
import Logo from '/public/svg/Header/logo.svg'

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-[#2B2E35] px-32 py-6">
      <Link href="/">
        <div className="cursor-pointer">
          <Logo />
        </div>
      </Link>
      <button
        className="rounded-[28px] bg-gradient-to-r from-[#FD6D1D] to-[#E53AD2] px-6 py-2.5 tracking-widest text-white text-opacity-90"
        type="button"
      >
        Connect Wallet
      </button>
    </div>
  )
}

export { Header }
