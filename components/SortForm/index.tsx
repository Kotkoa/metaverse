import React from 'react'
import Token from '../../public/svg/Explore/token.svg'
import Filter from '../../public/svg/Explore/filter_alt.svg'
import Sort from '../../public/svg/Explore/sort.svg'
import Hive from '../../public/svg/Explore/hive.svg'
import Ineterst from '../../public/svg/Explore/interests.svg'
import Roket from '../../public/svg/Explore/roket_launch.svg'
import Local from '../../public/svg/Explore/local_offer.svg'
import Select from '../Select'

export default function index() {
  return (
    <div>
      <form className="bg-[#2B2E35] p-5 flex justify-between mt-[12vh] max-w-[75vw] w-full rounded-xl">
        <Select
          values={[
            { id: 1, name: 'Blochain' },
            { id: 2, name: '2' },
            { id: 3, name: '3' },
            { id: 4, name: '4' },
            { id: 5, name: '5' }
          ]}
          icon={<Token />}
        />
        <div className="border-l border-white border-opacity-10"></div>
        <Select
          values={[
            { id: 1, name: 'Category' },
            { id: 2, name: '2' },
            { id: 3, name: '3' },
            { id: 4, name: '4' },
            { id: 5, name: '5' }
          ]}
          icon={<Ineterst />}
        />
        <div className="border-l border-white border-opacity-10"></div>
        <Select
          values={[
            { id: 1, name: 'Collections' },
            { id: 2, name: '2' },
            { id: 3, name: '3' },
            { id: 4, name: '4' },
            { id: 5, name: '5' }
          ]}
          icon={<Hive />}
        />
        <div className="border-l border-white border-opacity-10"></div>
        <Select
          values={[
            { id: 1, name: 'Price Range' },
            { id: 2, name: '2' },
            { id: 3, name: '3' },
            { id: 4, name: '4' },
            { id: 5, name: '5' }
          ]}
          icon={<Local />}
        />
        <div className="border-l border-white border-opacity-10"></div>
        <Select
          values={[
            { id: 1, name: 'On Sale' },
            { id: 2, name: '2' },
            { id: 3, name: '3' },
            { id: 4, name: '4' },
            { id: 5, name: '5' }
          ]}
          icon={<Roket />}
        />
        <div className="w-14"></div>
        <Select
          values={[
            { id: 1, name: 'Filter' },
            { id: 2, name: '2' },
            { id: 3, name: '3' },
            { id: 4, name: '4' },
            { id: 5, name: '5' }
          ]}
          icon={<Filter />}
        />
        <div className="border-l border-white border-opacity-10"></div>
        <Select
          values={[
            { id: 1, name: 'Sort by' },
            { id: 2, name: '2' },
            { id: 3, name: '3' },
            { id: 4, name: '4' },
            { id: 5, name: '5' }
          ]}
          icon={<Sort />}
        />
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
