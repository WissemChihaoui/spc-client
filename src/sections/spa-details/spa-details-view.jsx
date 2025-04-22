import React from 'react'
import ImageCarousel from './comp/image-carousel'

export default function SpaDetailsView() {
  return (
    <div className="grid grid-cols-2 gap-4">
        <div className="">
            <ImageCarousel />
        </div>
    </div>
  )
}
