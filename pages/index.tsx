import type { NextPage } from 'next'
import Link from 'next/link'
import { AchievementSection } from '../components/AchievementSection'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <section className="flex h-auto min-h-[934px]">
        <div className="mt-[217px] w-1/2 pr-[82px] pl-[120px]">
          <h1 className=" text-[70px] font-bold uppercase tracking-wide text-white text-opacity-90">
            Start your game jorney here
          </h1>
          <p className="mt-[30px] text-lg font-normal leading-[30px] text-white text-opacity-60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis et tortor egestas mi curabitur varius
            dignissim viverra.
          </p>
          <Link href="/explore">
            <button className="my-[44px] rounded-[28px] bg-gradient-to-r from-[#FD6D1D] to-[#E53AD2] px-12 py-2.5 tracking-widest text-white text-opacity-90">
              Explore
            </button>
          </Link>
        </div>
        <div className="w-1/2">
          <img src="/png/first_page.png" alt="" className="w-full" />
        </div>
      </section>
      <AchievementSection
        achievementCards={[
          {
            name: 'Tomahavk',
            highestBid: 'Highest Bid 1/1',
            price: '0.047 ETH',
            time: '08:10:00',
            like: true
          },
          {
            name: 'Tomahavk',
            highestBid: 'Highest Bid 1/1',
            price: '0.047 ETH',
            time: '08:10:00',
            like: true
          },
          {
            name: 'Tomahavk',
            highestBid: 'Highest Bid 1/1',
            price: '0.047 ETH',
            time: '08:10:00',
            like: true
          },
          {
            name: 'Tomahavk',
            highestBid: 'Highest Bid 1/1',
            price: '0.047 ETH',
            time: '08:10:00',
            like: true
          },
          {
            name: 'Tomahavk',
            highestBid: 'Highest Bid 1/1',
            price: '0.047 ETH',
            time: '08:10:00',
            like: true
          },
          {
            name: 'Tomahavk',
            highestBid: 'Highest Bid 1/1',
            price: '0.047 ETH',
            time: '08:10:00',
            like: true
          },
          {
            name: 'Tomahavk',
            highestBid: 'Highest Bid 1/1',
            price: '0.047 ETH',
            time: '08:10:00',
            like: true
          },
          { name: 'Tomahavk', highestBid: 'Highest Bid 1/1', price: '0.047 ETH', time: '08:10:00', like: true }
        ]}
        title="Gears"
      />
    </Layout>
  )
}

export default Home
