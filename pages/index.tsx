import type {NextPage} from 'next'
import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import {Header} from "../components/Header";

const Home: NextPage = () => {
    return (
        <div className="bg-[#212429] min-h-screen w-full font-poppins">
            <Head>
                <title>Metaverse</title>
                <meta name="description" content="Metaverse"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className="mx-auto max-w-[1440px]">
                <Header/>
                <main className="">
                    <section className="flex h-[934px]">
                        <div className="flex-1 mt-[217px] pr-[82px] pl-[120px]">
                            <h1 className="text-white text-opacity-90 font-bold text-[70px] uppercase">Start your game jorney here</h1>
                            <p className="text-white text-opacity-60 mt-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis et tortor egestas mi curabitur varius dignissim viverra. </p>
                            <button className="rounded-[28px] bg-gradient-to-r from-[#FD6D1D] to-[#E53AD2] px-6 py-2.5 text-white text-opacity-90 mt-[44px]">Explore</button>
                        </div>
                        <div className="flex-1">
                            <img src="/png/first_page.png" alt="" className="w-full"/>
                        </div>
                    </section>

                </main>

            </div>

        </div>
    )
}

export default Home
