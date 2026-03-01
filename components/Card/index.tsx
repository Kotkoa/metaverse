import Image from 'next/image'
import Link from 'next/link'
import Clock from '../../public/svg/Card/clock.svg'
import Heart from '../../public/svg/Card/heart.svg'
import Ethereum from '../../public/svg/Card/ethereum.svg'

const Card = ({ name, slug, image, highestBid, price, time, like }: {
  name: string
  slug: string
  image: string
  highestBid: string
  price: string
  time: string
  like: boolean
}) => {
  return (
    <div className="max-h-[404px] w-full max-w-[282px] rounded-[18px] bg-[#2B2E35] p-3.5 shadow-md">
      <div className="relative aspect-square overflow-hidden rounded-xl">
        <Link href={`/cards/${slug}`}>
          <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${image}`} alt={name} fill sizes="254px" className="object-cover" />
        </Link>
        <div className="absolute top-[10px] left-[10px] flex content-center rounded-[20px] bg-[#2B2E35] py-2.5 pl-[14px] pr-[18px]">
          <Clock />
          <p className="ml-[10px] bg-gradient-to-br from-[#FD6D1D] to-[#E53AD2] bg-clip-text text-[14px] tracking-[0.05em] text-transparent">
            {time}
          </p>
        </div>
        <div className="absolute top-[10px] right-[10px] rounded-[20px] bg-[#2B2E35] p-2.5">
          <Heart />
        </div>
      </div>
      <div className="flex justify-between mt-5">
        <div className="">
          <h1 className="text-xl text-white opacity-90">{name}</h1>
          <p className="mt-2 text-sm text-white opacity-60">{highestBid}</p>
        </div>
        <Ethereum />
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
