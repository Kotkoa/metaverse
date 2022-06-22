import React from 'react'
import Image from 'next/image'
import Close from '../../public/svg/CardPage/close.svg'
import Upload from '../../public/svg/CardPage/file_upload.svg'
import Like from '../../public/svg/Card/heart.svg'
import More from '../../public/svg/CardPage/more_horiz.svg'
import CardImage from '../../public/png/CardPage/img.png'
import Burger from '../../public/svg/CardPage/burger.svg'
import CardPageButton from "../CardPageButton";

function CardPage() {
  return (
    <div className="mx-[120px]  mt-16 text-white">
      <div className="flex">
        <div className="w-1/2 pr-3">
          <Image src={CardImage} alt="cardImage" layout="responsive" />
          <div className="mt-12">
            <div className="flex items-center">
              <Burger/>
              <h1 className="ml-3">Properties</h1>
            </div>
            <div className="grid grid-cols-4 gap-5 mt-8">
              {Buttons.map(button => <CardPageButton property={button.property} value={button.value} key={button.property}/> ) }
            </div>
          </div>
          <div className=""></div>
        </div>
        <div className="flex w-1/2">
          <div className="w-full">text</div>
          <div className="flex flex-col">
            <button
              type="button"
              className="w-12 flex justify-center items-center h-12 hover:bg-gradient-to-br from-[#FD6D1D] to-[#E53AD2] bg-[#2B2E35] rounded-3xl"
            >
              <Close />
            </button>
            <button
              type="button"
              className="w-12 flex justify-center items-center mt-5 h-12 hover:bg-gradient-to-br from-[#FD6D1D] to-[#E53AD2] bg-[#2B2E35] rounded-3xl"
            >
              <Upload />
            </button>
            <button
              type="button"
              className="w-12 flex justify-center items-center mt-5 h-12 hover:bg-gradient-to-br from-[#FD6D1D] to-[#E53AD2] bg-[#2B2E35] rounded-3xl"
            >
              <Like />
            </button>
            <button
              type="button"
              className="w-12 flex justify-center items-center mt-5 h-12 hover:bg-gradient-to-br from-[#FD6D1D] to-[#E53AD2] bg-[#2B2E35] rounded-3xl"
            >
              <More />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const Buttons = [
    {property: 'Background', value: 'Gray'},
    {property: 'Background', value: 'Gray'},
    {property: 'Background', value: 'Gray'},
    {property: 'Background', value: 'Gray'}
]

export { CardPage }
