import React from 'react'
import Image from 'next/image'
import Checkin from '../../public/svg/CardPage/checkin.svg'
import LocalMall from '../../public/svg/CardPage/local_mall.svg'
import LocalOffer from '../../public/svg/CardPage/local_offer.svg'
import verified from '../../public/png/CardPage/Ellipse342.png'

export default function IndexTable({
  fullName,
  priceEth,
  priceUsd,
  clickBuy,
  clickBid,
  serviceFee,
  totalEth,
  totalUsd
}) {
  return (
    <div className=" mt-[58px] bg-gradient-to-br from-[#FD6D1D] to-[#E53AD2] p-px rounded-[18px]">
      <div className="bg-[#2B2E35] rounded-[18px] p-7">
        <div className="flex items-center">
          <div className="relative w-max">
            <Image src={verified} alt="cardImage" width={48} height={48} />
            <div className="absolute -right-[4px] bottom-[5px]">
              <Checkin />
            </div>
          </div>
          <div className="ml-6">
            <div className="flex text-base">
              <p className="text-white tracking-widester text-opacity-60">Highest bid by</p>
              <p className="ml-1.5 font-medium text-white text-opacity-90">{fullName}</p>
            </div>
            <div className="flex text-[28px]">
              <p className="font-semibold text-white text-opacity-90">{priceEth} ETH</p>
              <p className="ml-3 text-white text-opacity-60">${priceUsd}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-6 mb-5">
          <button
            type="button"
            onClick={clickBuy}
            className="rounded-[28px] bg-gradient-to-r from-[#FD6D1D] to-[#E53AD2] px-6 py-2.5 tracking-widestmore text-white text-opacity-90 inline-flex mr-4 h-min"
          >
            <LocalMall />
            <span className="ml-3">Buy now</span>
          </button>
          <button
            type="button"
            onClick={clickBid}
            className="bg-gradient-to-br from-[#FD6D1D] to-[#E53AD2] p-px rounded-[28px]"
          >
            <div className="bg-[#2B2E35] rounded-[28px] px-6 py-2.5 flex">
              <LocalOffer />
              <p className=" bg-gradient-to-br from-[#FD6D1D] to-[#E53AD2] bg-clip-text tracking-[0.05em] text-transparent ml-3">
                Place a bid
              </p>
            </div>
          </button>
        </div>
        <div className="">
          <span className="text-white text-opacity-60">Service fee</span>
          <span className="ml-4 font-medium text-white tracking-widester text-opacity-90">{serviceFee}%</span>
          <span className="ml-4 text-white tracking-widester text-opacity-60">{totalEth} ETH</span>
          <span className="ml-4 text-white tracking-widester text-opacity-60">${totalUsd}</span>
        </div>
      </div>
    </div>
  )
}
