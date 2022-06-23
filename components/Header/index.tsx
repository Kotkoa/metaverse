//import Image from 'next/image'
import Link from 'next/link'
import Logo from '/public/svg/Header/logo.svg'

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-[#2B2E35] px-32 py-6">
      <Link href="/">
        <Logo />
        {/* <Image src={Logo} alt="LOGO" width={98} height={40} /> */}
        {/* <div className="bg-gradient-to-br from-[#FD6D1D] to-[#E53AD2] bg-clip-text font-blantic text-[32px] tracking-[0.14em] text-white text-transparent">
          LOGO
        </div> */}
        {/* >>>> check font - is displayed */}
      </Link>
      <button
        className="rounded-[28px] bg-gradient-to-r from-[#FD6D1D] to-[#E53AD2] px-6 py-2.5 tracking-widestmore text-white text-opacity-90"
        type="button"
      >
        Connect Wallet
      </button>
    </div>
  )
}

export { Header }
