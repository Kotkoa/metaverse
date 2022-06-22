import React from 'react'
import Close from '../../public/svg/CardPage/close.svg'
import Upload from '../../public/svg/CardPage/file_upload.svg'
import Like from '../../public/svg/Card/heart.svg'
import More from '../../public/svg/CardPage/more_horiz.svg'

function CardPage() {
  return (
    <div className="mx-[120px]  mt-16 text-white">
      <div className="flex">
        <div className="w-1/2">
          <Image src={cardImage} alt="cardImage" layout="responsive" />
          <div className=""></div>
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

export { CardPage }
