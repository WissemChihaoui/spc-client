import React from 'react'

export default function DetailsCard({details}) {
  return (
    <div>
        <div className="flex">
            <img src={details.logo} alt="" />
            <h4 className="font-bold text-xl">{details.name}</h4>
        </div>
    </div>
  )
}
