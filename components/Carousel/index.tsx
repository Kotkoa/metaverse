import IconHeading from "../IconHeading";
import ButtonNav from "../ButtonNav";
import Toll from "../../public/svg/CardPage/toll.svg"
import ArrowLeft from "../../public/svg/CardPage/arrow_left.svg"
import ArrowRight from "../../public/svg/CardPage/arrow_right.svg"
import {Card} from "../Card";
import Link from "next/link";
import {useState} from "react";

function selectCards(cards: [], firstCard: number, showingCards = 4) {

    if (cards.length <= 4) {
        return cards
    }

    const slicedCards : [] = []

    const remainder = (cards.length - firstCard) % showingCards

    if (remainder) {
        for (let i = cards.length - remainder; i < cards.length; i++) {
            slicedCards.push(cards[i])
        }

        for (let i = 0; i < showingCards - remainder; i++) {
            slicedCards.push(cards[i])
        }
        return slicedCards
    }

    for (let i = firstCard; i < showingCards; i++) {
        slicedCards.push(cards[i])

    }
    return slicedCards
}



const Carousel = () => {

    const [firstCard, setFirstCard] = useState(0)




    return (
        <div className="border-t border-white border-opacity-10">
            <div className="flex justify-between mt-[60px]">
                <IconHeading icon={<Toll/>} heading='More from this Collection'/>
                <div className="flex space-x-5">
                    <ButtonNav icon={<ArrowLeft/>}/>
                    <ButtonNav icon={<ArrowRight/>}/>
                </div>
            </div>
            <div className="mt-10 flex space-x-[24px] overflow-hidden">
                {

                    CARDS.map(card => <Link href={`link${card.name}`} key={card.name}>
                        <Card
                            name={card.name}
                            highestBid={card.highestBid}
                            price={card.price}
                            time={card.time}
                            like={card.like}
                        />
                    </Link>)}
            </div>
        </div>
    )
}

const CARDS = [
    {
        name: 'Tomahavk1',
        highestBid: 'Highest Bid 1/1',
        price: '0.047 ETH',
        time: '08:10:00',
        like: true
    },
    {
        name: 'Tomahavk2',
        highestBid: 'Highest Bid 1/1',
        price: '0.047 ETH',
        time: '08:10:00',
        like: true
    },
    {
        name: 'Tomahavk3',
        highestBid: 'Highest Bid 1/1',
        price: '0.047 ETH',
        time: '08:10:00',
        like: true
    },
    {
        name: 'Tomahavk4',
        highestBid: 'Highest Bid 1/1',
        price: '0.047 ETH',
        time: '08:10:00',
        like: true
    },
    {
        name: 'Tomahavk5',
        highestBid: 'Highest Bid 1/1',
        price: '0.047 ETH',
        time: '08:10:00',
        like: true
    },
    {
        name: 'Tomahavk6',
        highestBid: 'Highest Bid 1/1',
        price: '0.047 ETH',
        time: '08:10:00',
        like: true
    },
    {
        name: 'Tomahavk7',
        highestBid: 'Highest Bid 1/1',
        price: '0.047 ETH',
        time: '08:10:00',
        like: true
    },
    {name: 'Tomahavk8', highestBid: 'Highest Bid 1/1', price: '0.047 ETH', time: '08:10:00', like: true}
]


console.log(selectCards(CARDS, 7))

export {Carousel}