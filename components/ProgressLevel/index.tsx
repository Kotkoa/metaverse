import React, { useMemo } from 'react'

export default function ProgressLevel({ title, valueExist, valueTotal }) {
  const percent = useMemo(() => {
    return Math.floor((valueExist * 100) / valueTotal) + '%'
  }, [valueExist, valueTotal])

  return (
    <div className="mt-8">
      <div className="flex justify-between">
        <p className="text-white text-opacity-60">{title}</p>
        <p className="text-white text-opacity-90 tracking-widester">
          {valueExist} of {valueTotal}
        </p>
      </div>
      <div className="relative w-full">
        <div className="h-2.5 w-full bg-white bg-opacity-10 rounded-[5px] mt-1.5"></div>
        <div
          className={`absolute top-0 left-0 bg-gradient-to-br from-[#FD6D1D] to-[#E53AD2] h-2.5 rounded-[5px]`}
          style={{ width: percent }}
        ></div>
      </div>
    </div>
  )
}
