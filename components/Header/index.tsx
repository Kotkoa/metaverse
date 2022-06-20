const Header = () => {
    return (
        <div className="bg-[#2B2E35] px-32 py-6 flex justify-between">
            <img src="svg/Header/logo.svg" alt=""/>
            <button className="rounded-[28px] bg-gradient-to-r from-[#FD6D1D] to-[#E53AD2] px-6 py-2.5 text-white text-opacity-90" type="button">Connect Wallet</button>
        </div>
    )
}

export {Header}