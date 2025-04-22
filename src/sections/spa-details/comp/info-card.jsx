import React from 'react'

export default function InfoCard() {
  return (
    <div className='grid grid-cols-3 mt-16 gap-2'>
        <div className="bg-primary relative rounded-xl">
            <span className='absolute bg-secondary px-3 rounded text-primary left-2 -top-3'>Inf. Générale</span>
            <ul className='p-8 font-bold'> 
                <li className='mb-2'><span className='text-sm font-light'>Adresse :</span>100 chemin de la chapelle – 42300 Villerest</li>
                <li className='mb-2'><span className='text-sm font-light'>Email :</span>contact@davidgrandspa.fr</li>
                <li className=''><span className='text-sm font-light'>Tél. :</span>+33 (0)4 77 23 01 98</li>
            </ul>
        </div>
        <div className="bg-secondary text-primary relative rounded-xl">
            <span className='absolute bg-primary px-3 rounded text-secondary left-2 -top-3'>Inf. Utiles</span>
            <div className="p-8">
                <span className='font-bold'>Jours et Horaires d’ouverture</span>
                <p>Lundi : fermé ; mardi à jeudi : 9h à 19h ; Vendredi : 9 à 20h ; Samedi 9h à 20h; dimanche de 9h à 14h (sur réservation).</p>
            </div>
        </div>
        <div className="bg-primary text-secondary relative rounded-xl">
            <span className='absolute bg-secondary px-3 rounded text-primary left-2 -top-3'>Marque(s) Partenaire(s)</span>
            <div className="p-8">
                <span className='font-bold'>[acf_partenaire]</span>
            </div>
        </div>
    </div>
  )
}
