import React from 'react'

export default function DetailsCard({details}) {
  return (
    <div className='bg-white p-8 rounded-2xl'>
        <div className="flex mb-4">
            <img src={details?.logo} alt="" className='max-w-20'/>
            <h4 className="font-semibold text-4xl">{details?.name}</h4>
        </div>
        <p className='leading-base text-base max-h-48 overflow-y-scroll'>{details?.description}</p>
    </div>
  )
}
