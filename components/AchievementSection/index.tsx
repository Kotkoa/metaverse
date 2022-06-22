import { Card } from '../Card'

const AchievementSection = ({ title, achievementCards }) => {
  return (
    <section className="mt-20 px-[120px]">
      <h1 className="text-xl font-semibold tracking-widest text-white text-opacity-90">{title}</h1>
      <div className="grid grid-cols-4 gap-6 mt-10">
        {achievementCards.map((card) => (
          <Card
            key={card.name}
            name={card.name}
            highestBid={card.highestBid}
            price={card.price}
            time={card.time}
            like={card.like}
          />
        ))}
      </div>
    </section>
  )
}

export { AchievementSection }
