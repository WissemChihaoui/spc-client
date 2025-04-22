import React, { useState } from 'react'
import { IoMdCart, IoMdMenu } from 'react-icons/io'
import Logo from '../logo/logo'
import Menu from '../menu/menu'

export default function Navbar() {
    const [show, setShow] = useState(false)
  return (
    <div className="w-full px-16 py-8 flex justify-between ">
        <IoMdMenu className='text-2xl' onClick={()=>setShow(true)}/>
        <Menu show={show} onClose={()=>setShow(false)}/>

        <Logo className="max-w-60"/>

        <IoMdCart className='text-2xl'/>
    </div>
  )
}
