import React from 'react'
import CardLarge from '../../../components/card-large/card-large'
import ButtonIcon from '../../../components/button-icon/button-icon'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'

export default function Offres() {
  return (
    <>
        <div className='max-w-6xl mx-auto'>
            <h2 className='text-4xl font-bold text-center'>Saint-Valentin : notre sélection <div className='text-[#777676]'>Des offres pensées pour célébrer l'amour</div></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16">
                <CardLarge />
                <CardLarge />
                <CardLarge />
                <CardLarge />
            </div>
            <div className="text-center">
                <ButtonIcon
                    icon={<FaRegArrowAltCircleRight />}
                    title="Découvrir"
                />
            </div>
        </div>
    </>
  )
}
