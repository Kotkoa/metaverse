import {Card} from "../Card";

const AchievementSection = ({title, achievementCards}) => {
    return (
        <section className="mt-20 px-[120px]">
            <h1 className="font-semibold text-xl text-white tracking-widest text-opacity-90">{title}</h1>
            <div className="mt-10 grid grid-cols-4 gap-6">
                {achievementCards.map(card => <Card key={card.name} name={card.name} highestBid={card.highestBid}
                                                    price={card.price} time={card.time} like={card.like}/>)}
            </div>
        </section>
    )
}

export {AchievementSection}