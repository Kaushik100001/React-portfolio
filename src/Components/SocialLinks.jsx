import { style } from '@mui/system'
import React from 'react'
import {FaGithub , FaLinkedin , FaInstagram} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'

const SocialLinks = () => {

  let links=[
    {
        id:1 , 
        child : (
          
                <>Linkedin <FaLinkedin size={30}/></>
           
        ) ,
        href:"https://www.linkedin.com/in/kaushik-shetty-0a4874232/"  , 
        style : "rounded-tr-md"
    } , 
    {
        id:2 , 
        child : (
           
                <>Github <FaGithub size={30}/></>
          
        ) ,
        href:"https://github.com/Kaushik100001"  , 
        style : "rounded-tr-md"
    },
    {
        id:3 , 
        child : (
           
                <>Mail <HiOutlineMail size={30}/></>
            
        ) ,
        href:"mailto:kaushikshetty6979@gmail.com"  , 
        style : "rounded-tr-md"
    },
    {
      id:4, 
      child : (
         
              <>Instagram <FaInstagram size={30}/></>
        
      ) ,
      href:"https://www.instagram.com/kaushik_shetty10/"  , 
      style : "rounded-tr-md"
  },
  ]




  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
    <ul>

         {links.map((link)=>
            <li key={link.id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'+ " " + link.style}>
            <a 
            href={link.href} 
            className='text-white flex justify-between items-center w-full'
            target="_blank">
            {link.child}
            </a>
        </li>
             )}





       
    </ul>
      
    </div>
  )
}

export default SocialLinks
