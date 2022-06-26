import React from 'react'
import Image from 'next/image'
import Layout from '../../components/Layout'
import Banner from '../../public/png/Explore/explore.png'
import SortForm from '../../components/SortForm'

export default function Explore() {
  return (
    <Layout>
      <div className="mx-[120px] text-white text-opacity-90">
        <div className="relative w-full h-auto mt-16">
          <Image src={Banner} alt="Banner" layout="responsive" />
          <div className="absolute top-0 left-0 z-10 w-full h-full text-center">
            <p className="font-bold text-[70px] tracking-widester mt-[4%]">EXPLORE</p>
          </div>
          <div className="absolute left-0 z-20 flex flex-col items-center justify-between w-full text-center -bottom-6">
            <SortForm />
          </div>
        </div>
        <div className="mt-[72px]">All cards sorted</div>
        <div className="mt-16">Popular cards</div>
      </div>
    </Layout>
  )
}
