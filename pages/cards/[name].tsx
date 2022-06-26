import React from 'react'
import Image from 'next/image'
import Layout from '../../components/Layout'
import CardImage from '../../public/png/CardPage/img.png'
import Burger from '../../public/svg/CardPage/burger.svg'
import Stats from '../../public/svg/CardPage/stats.svg'
import CardPageButton from '../../components/CardPageButton'
import Star from '../../public/svg/CardPage/star.svg'
import Button from '../../components/ButtonNav'
import Close from '../../public/svg/CardPage/close.svg'
import Upload from '../../public/svg/CardPage/file_upload.svg'
import Like from '../../public/svg/Card/heart.svg'
import More from '../../public/svg/CardPage/more_horiz.svg'
import IconHeading from '../../components/IconHeading'
import ProgressLevel from '../../components/ProgressLevel'
import BidTable from '../../components/BidTable'
import { Carousel } from '../../components/Carousel'

function CardPage() {
  return (
    <Layout>
      <div className="mx-[120px]  mt-16 text-white">
        <div className="flex">
          <div className="w-1/2 pr-3">
            <Image src={CardImage} alt="cardImage" layout="responsive" />
            <div className="mt-12">
              <IconHeading icon={<Burger />} heading="Properties" />
              <div className="grid grid-cols-4 gap-5 mt-8">
                {Buttons.map((button) => (
                  <CardPageButton property={button.property} value={button.value} key={button.property} />
                ))}
              </div>
            </div>
            <div className="mt-12 mb-20">
              <IconHeading icon={<Stats />} heading="Stats" />
              <div className="flex justify-between mt-8 text-base text-white text-opacity-90">
                <p>Token ID</p>
                <p>12,233 of 16,383</p>
              </div>
            </div>
          </div>
          <div className="flex w-1/2">
            <div className="w-full ml-16 mr-16">
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
              <BidTable
                fullName="Vadim Dora"
                priceEth="1.46"
                priceUsd="2,764.89"
                clickBuy={() => {}}
                clickBid={() => {}}
                serviceFee="2.5"
                totalEth="2.563"
                totalUsd="4,540.62"
              />
              <div className="mt-12">
                <IconHeading icon={<Star />} heading="Levels" />
                <ProgressLevel title="ColoHue" valueExist={253} valueTotal={255} />
                <ProgressLevel title="Dimensions" valueExist={11} valueTotal={17} />
                <ProgressLevel title="Layers" valueExist={3} valueTotal={3} />
              </div>
            </div>
            <div className="flex flex-col">
              <Button icon={<Close />} />
              <Button icon={<Upload />} />
              <Button icon={<Like />} />
              <Button icon={<More />} />
            </div>
          </div>
        </div>
        <Carousel />
      </div>
    </Layout>
  )
}

const Buttons = [
  { property: 'Background', value: 'Gray' },
  { property: 'Background', value: 'Gray' },
  { property: 'Background', value: 'Gray' },
  { property: 'Background', value: 'Gray' }
]

export default CardPage
