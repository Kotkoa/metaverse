const Card = ({ name, highestBid, price, time, like }) => {
  return (
    <div className="max-h-[404px] w-full max-w-[282px] rounded-[18px] bg-[#2B2E35] p-3.5 shadow-md">
      <div className="relative">
        <img src="png/Cards/img.png" alt="cardImage" className="w-full" />
        <div className="absolute top-[10px] left-[10px] flex content-center rounded-[20px] bg-[#2B2E35] py-2.5 pl-[14px] pr-[18px]">
          <img src="svg/Card/clock.svg" alt="clock" />
          <p className="ml-[10px] bg-gradient-to-br from-[#FD6D1D] to-[#E53AD2] bg-clip-text text-[14px] tracking-[0.05em] text-transparent">
            08:10:00
          </p>
        </div>
        <div className="absolute top-[10px] right-[10px] rounded-[20px] bg-[#2B2E35] p-2.5">
          <img src="svg/Card/heart.svg" alt="heart" />
        </div>
      </div>
      <div className="flex justify-between mt-5">
        <div className="">
          <h1 className="text-xl text-white opacity-90">{name}</h1>
          <p className="mt-2 text-sm text-white opacity-60">{highestBid}</p>
        </div>
        <img src="svg/Card/ethereum.svg" alt="ethereum" />
      </div>
      <div className="flex justify-between mt-5">
        <p className="text-base text-white opacity-90">Price</p>
        <p className="ml-[10px] bg-gradient-to-br from-[#FD6D1D] to-[#E53AD2] bg-clip-text text-base font-semibold tracking-[0.05em] text-transparent">
          {price}
        </p>
      </div>
    </div>
  )
}

export { Card }
