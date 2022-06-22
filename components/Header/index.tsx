import Link from 'next/link'

const Header = () => {
  return (
    <div className="flex justify-between bg-[#2B2E35] px-32 py-6">
      <Link href="/">
        <img src="svg/Header/logo.svg" alt="" />
        {/*<div*/}
        {/*    className="bg-gradient-to-br from-[#FD6D1D] to-[#E53AD2] bg-clip-text font-blantic text-[32px] tracking-[0.14em] text-white text-transparent">*/}
        {/*    LOGO*/}
        {/*</div>*/}
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
