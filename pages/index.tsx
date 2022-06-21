import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen w-full bg-[#212429]">
      <div className="mx-auto max-w-[1440px]">
        <Header />
        <main>
          <section className="flex h-[934px]">
            <div className="mt-[217px] w-1/2 pr-[82px] pl-[120px]">
              <h1 className=" text-[70px] font-bold uppercase tracking-widester text-white text-opacity-90">
                Start your game jorney here
              </h1>
              <p className="mt-[30px] text-lg font-normal leading-[30px] text-white text-opacity-60">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis et tortor egestas mi curabitur varius
                dignissim viverra.{' '}
              </p>
              <button className="mt-[44px] rounded-[28px] bg-gradient-to-r from-[#FD6D1D] to-[#E53AD2] px-12 py-2.5 tracking-widestmore text-white text-opacity-90">
                Explore
              </button>
            </div>
            <div className="w-1/2">
              <img src="/png/first_page.png" alt="" className="w-full" />
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Home
