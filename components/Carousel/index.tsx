import IconHeading from '../IconHeading'
import ButtonNav from '../ButtonNav'
import Toll from '../../public/svg/CardPage/toll.svg'
import ArrowLeft from '../../public/svg/CardPage/arrow_left.svg'
import ArrowRight from '../../public/svg/CardPage/arrow_right.svg'
import { Card } from '../Card/index'
import { CARDS, CardData } from '../../data/cards'

const Carousel = ({ excludeSlug }: { excludeSlug?: string }) => {
  const cards = excludeSlug ? CARDS.filter((c) => c.slug !== excludeSlug) : CARDS

  return (
    <div className="border-t border-white border-opacity-10">
      <div className="flex justify-between mt-[60px]">
        <IconHeading icon={<Toll />} heading="More from this Collection" />
        <div className="flex space-x-5">
          <ButtonNav icon={<ArrowLeft />} />
          <ButtonNav icon={<ArrowRight />} />
        </div>
      </div>
      <div className="mt-10 flex space-x-[24px] overflow-hidden pb-10">
        {cards.map((card) => (
          <Card
            key={card.id}
            name={card.name}
            slug={card.slug}
            image={card.image}
            highestBid={card.highestBid}
            price={card.price}
            time={card.time}
            like={card.like}
          />
        ))}
      </div>
    </div>
  )
}

export { Carousel }
