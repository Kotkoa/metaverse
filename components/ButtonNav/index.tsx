import React from 'react'

export default function ButtonNav(props) {
  return (
    <button
      type="button"
      className="w-12 flex justify-center items-center h-12 mb-5 hover:bg-gradient-to-br from-[#FD6D1D] to-[#E53AD2] bg-[#2B2E35] rounded-3xl"
    >
      {props.icon}
    </button>
  )
}
