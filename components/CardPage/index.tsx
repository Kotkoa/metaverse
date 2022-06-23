import React from 'react'
import Image from 'next/image'
import Close from '../../public/svg/CardPage/close.svg'
import Upload from '../../public/svg/CardPage/file_upload.svg'
import Like from '../../public/svg/Card/heart.svg'
import More from '../../public/svg/CardPage/more_horiz.svg'
import CardImage from '../../public/png/CardPage/img.png'
import Burger from '../../public/svg/CardPage/burger.svg'
import Stats from '../../public/svg/CardPage/stats.svg'
import verified from '../../public/png/CardPage/Ellipse342.png'
import CardPageButton from '../CardPageButton'
import Checkin from '../../public/svg/CardPage/checkin.svg'

function CardPage() {
  return (
    <div className="mx-[120px]  mt-16 text-white">
      <div className="flex">
        <div className="w-1/2 pr-3">
          <Image src={CardImage} alt="cardImage" layout="responsive" />
          <div className="mt-12">
            <div className="flex items-center">
              <Burger />
              <h1 className="ml-3">Properties</h1>
            </div>
            <div className="grid grid-cols-4 gap-5 mt-8">
              {Buttons.map((button) => (
                <CardPageButton property={button.property} value={button.value} key={button.property} />
              ))}
            </div>
          </div>
          <div className="mt-12 mb-20">
            <div className="flex items-center">
              <Stats />
              <h1 className="ml-3">Stats</h1>
            </div>
            <div className="flex justify-between mt-8 text-base text-white text-opacity-90">
              <p>Token ID</p>
              <p>12,233 of 16,383</p>
            </div>
          </div>
        </div>
        <div className="flex w-1/2">
          <div className="w-full ml-16">
            <h1 className="text-[40px] font-bold text-white text-opacity-90">Swamp</h1>
            <div className="flex items-center mt-5">
              <div className="bg-gradient-to-br from-[#FD6D1D] to-[#E53AD2] p-px rounded w-max mr-4 text-base">
                <div className="bg-[#2B2E35] rounded px-2.5 w-max py-1">
                  <p className=" uppercase bg-gradient-to-br from-[#FD6D1D] to-[#E53AD2] bg-clip-text tracking-[0.05em] text-transparent">
                    2.5 ETH
                  </p>
                </div>
              </div>
              <div className="mr-4 border border-white border-opacity-20 w-max rounded px-2.5 py-1">$2,429.87</div>
              <p className="text-white text-opacity-60 ">10 in stock</p>
            </div>
            <p className="text-white mt-9 text-opacity-90">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida senectus et purus aliquam. Pellentesque
              venenatis habitant velit dignissim porttitor purus et. Sed a vivamus ipsum semper arcu orci in nam
              bibendum. Volutpat sed eget tellus euismod proin nec.
            </p>
            <div className=" mt-[72px] bg-gradient-to-br from-[#FD6D1D] to-[#E53AD2] p-px rounded-[18px]">
              <div className="bg-[#2B2E35] rounded-[18px] p-7">
                <div className="flex">
                  <div className="relative w-max">
                    <Image src={verified} alt="cardImage" width={48} height={48} />
                    <div className="absolute -right-[4px] bottom-[5px]">
                      <Checkin />
                    </div>
                  </div>
                  <div className="ml-6">
                    <div className="flex">
                      <p>Highest bid by</p>
                      <p>Vadim Dora</p>
                    </div>
                    <div className="flex">
                      <p>1.46 ETH</p>
                      <p>$2,764.89</p>
                    </div>
                  </div>
                </div>
                <div className=""></div>
                <div className=""></div>
              </div>
            </div>
            <div className=""></div>
          </div>
          <div className="flex flex-col">
            <button
              type="button"
              className="w-12 flex justify-center items-center h-12 hover:bg-gradient-to-br from-[#FD6D1D] to-[#E53AD2] bg-[#2B2E35] rounded-3xl"
            >
              <Close />
            </button>
            <button
              type="button"
              className="w-12 flex justify-center items-center mt-5 h-12 hover:bg-gradient-to-br from-[#FD6D1D] to-[#E53AD2] bg-[#2B2E35] rounded-3xl"
            >
              <Upload />
            </button>
            <button
              type="button"
              className="w-12 flex justify-center items-center mt-5 h-12 hover:bg-gradient-to-br from-[#FD6D1D] to-[#E53AD2] bg-[#2B2E35] rounded-3xl"
            >
              <Like />
            </button>
            <button
              type="button"
              className="w-12 flex justify-center items-center mt-5 h-12 hover:bg-gradient-to-br from-[#FD6D1D] to-[#E53AD2] bg-[#2B2E35] rounded-3xl"
            >
              <More />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const Buttons = [
  { property: 'Background', value: 'Gray' },
  { property: 'Background', value: 'Gray' },
  { property: 'Background', value: 'Gray' },
  { property: 'Background', value: 'Gray' }
]

export { CardPage }