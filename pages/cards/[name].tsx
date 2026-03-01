import React from 'react'
import Image from 'next/image'
import { GetStaticPaths, GetStaticProps } from 'next'
import Layout from '../../components/Layout'
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
import { CARDS, CardData } from '../../data/cards'

export const getStaticPaths: GetStaticPaths = () => {
  const paths = CARDS.map((card) => ({ params: { name: card.slug } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = ({ params }) => {
  const card = CARDS.find((c) => c.slug === params?.name)
  if (!card) return { notFound: true }
  return { props: { card } }
}

function CardPage({ card }: { card: CardData }) {
  return (
    <Layout>
      <div className="mx-[120px] mt-16 text-white">
        <div className="flex">
          <div className="w-1/2 pr-3">
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${card.image}`}
                alt={card.name}
                fill
                sizes="50vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="mt-12">
              <IconHeading icon={<Burger />} heading="Properties" />
              <div className="grid grid-cols-4 gap-5 mt-8">
                {card.properties.map((button, index) => (
                  <CardPageButton property={button.property} value={button.value} key={index} />
                ))}
              </div>
            </div>
            <div className="mt-12 mb-20">
              <IconHeading icon={<Stats />} heading="Stats" />
              <div className="flex justify-between mt-8 text-base text-white text-opacity-90">
                <p>Token ID</p>
                <p>{card.tokenId}</p>
              </div>
            </div>
          </div>
          <div className="flex w-1/2">
            <div className="w-full ml-16 mr-16">
              <h1 className="text-[40px] font-bold text-white text-opacity-90">{card.name}</h1>
              <div className="flex items-center mt-5">
                <div className="bg-gradient-to-br from-[#FD6D1D] to-[#E53AD2] p-px rounded w-max mr-4 text-base">
                  <div className="bg-[#2B2E35] rounded px-2.5 w-max py-1">
                    <p className=" uppercase bg-gradient-to-br from-[#FD6D1D] to-[#E53AD2] bg-clip-text tracking-[0.05em] text-transparent">
                      {card.priceEth} ETH
                    </p>
                  </div>
                </div>
                <div className="mr-4 border border-white border-opacity-20 w-max rounded px-2.5 py-1">
                  ${card.priceUsd}
                </div>
                <p className="text-white text-opacity-60">{card.stock} in stock</p>
              </div>
              <p className="text-white mt-9 text-opacity-90">{card.description}</p>
              <BidTable
                fullName={card.bidder}
                priceEth={card.bidEth}
                priceUsd={card.bidUsd}
                clickBuy={() => {}}
                clickBid={() => {}}
                serviceFee={card.serviceFee}
                totalEth={card.totalEth}
                totalUsd={card.totalUsd}
              />
              <div className="mt-12">
                <IconHeading icon={<Star />} heading="Levels" />
                {card.levels.map((level, index) => (
                  <ProgressLevel
                    key={index}
                    title={level.title}
                    valueExist={level.exist}
                    valueTotal={level.total}
                  />
                ))}
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
        <Carousel excludeSlug={card.slug} />
      </div>
    </Layout>
  )
}

export default CardPage
