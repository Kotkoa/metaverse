const Card = ({name, highestBid, price, time, like}) => {
    return (
        <div className="bg-[#2B2E35] max-w-[282px] h-[404px] rounded-[18px] shadow-md p-3.5">
            <div className="relative">
                <img src="png/Cards/img.png" alt="cardImage" className="w-[254px] h-[254px]"/>
                <div
                    className="absolute flex content-center top-[10px] left-[10px] rounded-[20px] py-2.5 pl-[14px] pr-[18px] bg-[#2B2E35]">
                    <img src="svg/Card/clock.svg" alt="clock"/>
                    <p className="ml-[10px] bg-gradient-to-br from-[#FD6D1D] to-[#E53AD2] bg-clip-text text-[14px] tracking-[0.05em] text-transparent">08:10:00</p>
                </div>
                <div className="absolute top-[10px] right-[10px] rounded-[20px] p-2.5 bg-[#2B2E35]">
                    <img src="svg/Card/heart.svg" alt="heart"/>
                </div>
            </div>
            <div className="mt-5 flex justify-between">
                <div className="">
                    <h1 className="text-xl text-white opacity-90">{name}</h1>
                    <p className="text-sm text-white opacity-60 mt-2">{highestBid}</p>
                </div>
                <img src="svg/Card/ethereum.svg" alt="ethereum"/>
            </div>
            <div className="mt-5 flex justify-between">
                    <p className="text-base text-white opacity-90">Price</p>
                <p className="ml-[10px] bg-gradient-to-br from-[#FD6D1D] font-semibold to-[#E53AD2] bg-clip-text text-base tracking-[0.05em] text-transparent">{price}</p>

            </div>
        </div>
    )
}

export {Card}