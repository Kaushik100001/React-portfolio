import React from 'react'
import { useState } from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import { Link } from 'react-scroll'

const Navbar = () => {
    
    let [nav , setnav]=useState(false)


    let links  =[
        {
            id:1  , 
            link : 'home'
        },
        {
            id:2  , 
            link : 'about'
        },
        {
            id:3  , 
            link : 'experience'
        },
        {
            id:4  , 
            link : 'contact'
        }
    ]
  return (

    <div className='flex bg-black justify-between items-center w-full h-20 text-white fixed '>

    <div>
    <h1 className='font-signature text-5xl p-5'>Kaushik</h1>
    </div>

    <ul className=' hidden md:flex '>
        {links.map(link=>(
            <li key={link.id}  className="text-gray-500 px-4 capitalize font-medium cursor-pointer hover:scale-105" >
            <Link to={link.link} smooth duration={500}>{link.link}</Link>
            </li>
        ))}
        
    </ul>

    <div  onClick={()=>setnav(!nav)}  className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden' >
    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
    </div>
    
    {nav && (
    <ul className='flex flex-col justify-center items-center absolute left-0 top-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
    {links.map(link=>(
            <li key={link.id}  className=" px-4 capitalize cursor-pointer py-6 text-4xl" > 
            <Link onClick={()=>setnav(!nav)} to={link.link} smooth duration={500}>{link.link}</Link></li>
        ))}

    </ul>
    )}

      
    </div>
  )
}

export default Navbar
