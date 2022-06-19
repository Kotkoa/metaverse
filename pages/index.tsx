// import Head from 'next/head'

import Header from '../components/Header/index';

function HomePage() {
    return (
        <div>
            <head>
                <meta charSet="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Document</title>
            </head>
            <main className="bg-[#212429] w-full min-h-screen flex flex-col">
                <Header/>
            </main>
        </div>
    )
}

export default HomePage