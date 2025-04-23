import React from 'react'
import logo from "../../assets/SPC-logo-cercle-blanc.png"
import { FaLongArrowAltRight } from 'react-icons/fa'
import { paths } from '../../router/paths'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div className="lg:p-16 p-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-secondary rounded-lg px-8 py-12 text-white text-center">
            <img src={logo} alt="" className='w-48 mb-4 mx-auto text-lg'/>
            <p className='mb-4'>Spa & Prestige Collection vous invite à vivre des expériences uniques, avec des soins personnalisés, des offres spa exclusives, des séjours d’exception et des options de restauration raffinées. Découvrez également nos cartes cadeaux pour offrir ces moments d’exception.</p>

            <div className='flex flex-col items-center'>
                <span>Tél. +33 06 99 57 07 54</span> 
                <a href='#' className='bg-primary py-3 rounded-full w-full my-3 text-secondary flex items-center justify-center gap-3 font-bold text-center'>Nous Contacter<FaLongArrowAltRight /></a> 
            </div>
        </div>
        <div className="bg-white rounded-lg px-8 py-12 text-secondary flex flex-col lg:flex-row gap-3 justify-between">
            <ul className='text-lg space-y-2'>
                <span className='text-2xl font-bold'>A PROPOS</span>
                <li><Link to={paths.spa.root}>Qui sommes nous</Link></li>
                <li><a href="#">Book Collection & Prestige</a></li>
                <li><a href="#">Carte Cadeau</a></li>
                <li><a href="#">Glossaire des termes utilisés</a></li>
                <li><a href="#">Blog / Actualités</a></li>
                <li><a href="#">Parrainage</a></li>
                <li><a href="#">Fidélité</a></li>
                <li><a href="#">Charte Qualité</a></li>
                <li><a href="#">Boites à questions</a></li>
            </ul>
            <ul className='text-lg space-y-2'>
                <span className='text-2xl font-bold'>PROFESSIONNEL</span>
                <li><a href="#">Espace partenaire</a></li>
                <li><a href="#">Devenir partenaire</a></li>
                <li><a href="#">Solutions pour entreprises</a></li>
                <li><a href="#">Collaboration avec les marques</a></li>
                <li><a href="#">Nous recrutons</a></li>
            </ul>
        </div>
    </div>
  )
}
