import React from 'react'

export default function IconHeading({ icon, heading }) {
  return (
    <div className="flex items-center">
      {icon}
      <h1 className="ml-3">{heading}</h1>
    </div>
  )
}
