import React from 'react'

function CardPageButton({ property, value }) {
  return (
    <button>
      <div className="bg-gradient-to-br from-[#FD6D1D] to-[#E53AD2] p-px rounded-2xl">
        <div className="bg-[#212429] rounded-2xl bg-opacity-90 px-3 py-2.5">
          <p className="text-sm uppercase bg-gradient-to-br from-[#FD6D1D] to-[#E53AD2] bg-clip-text text-[14px] tracking-[0.05em] text-transparent">
            {property}
          </p>
          <p className="text-sm text-white text-opacity-90">{value}</p>
        </div>
      </div>
    </button>
  )
}

export default CardPageButton
