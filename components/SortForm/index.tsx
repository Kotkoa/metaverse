import React from 'react'
import Token from '../../public/svg/Explore/token.svg'
import Filter from '../../public/svg/Explore/filter_alt.svg'
import Sort from '../../public/svg/Explore/sort.svg'
import Hive from '../../public/svg/Explore/hive.svg'
import Ineterst from '../../public/svg/Explore/interests.svg'
import Roket from '../../public/svg/Explore/roket_launch.svg'
import Local from '../../public/svg/CardPage/local_offer.svg'

export default function index() {
  return (
    <div>
      <form className="bg-[#2B2E35] p-5 flex justify-between mt-[12vh] max-w-[75vw] w-full rounded-xl">
        {buttonsLeft.map((input) => {
          return (
            <div key={input.name} className="flex">
              {input.icon}
              <p className="ml-3">{input.name}</p>
            </div>
          )
        })}
        {buttonsRight.map((input) => {
          return (
            <div key={input.name} className="flex">
              {input.icon}
              <p className="ml-3">{input.name}</p>
            </div>
          )
        })}
      </form>
    </div>
  )
}

const buttonsLeft = [
  { icon: <Token />, name: 'Blockhain', selection: ['option1', 'option2', 'option3', 'option4', 'option5'] },
  { icon: <Ineterst />, name: 'Category', selection: ['option1', 'option2', 'option3', 'option4', 'option5'] },
  { icon: <Hive />, name: 'Collections', selection: ['option1', 'option2', 'option3', 'option4', 'option5'] },
  { icon: <Local />, name: 'Price Range', selection: ['option1', 'option2', 'option3', 'option4', 'option5'] },
  { icon: <Roket />, name: 'On Sale', selection: ['option1', 'option2', 'option3', 'option4', 'option5'] }
]

const buttonsRight = [
  { icon: <Filter />, name: 'Filter', selection: ['option1', 'option2', 'option3', 'option4', 'option5'] },
  { icon: <Sort />, name: 'Sort By', selection: ['option1', 'option2', 'option3', 'option4', 'option5'] }
]
