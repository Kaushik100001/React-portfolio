import React from 'react'
import {MdOutlineArrowRight} from 'react-icons/md'
import { Link } from 'react-scroll'
import Kaushik from "../Assets/Kaushik.jpg"

const Home = () => {
    return (
        <div name="home" className='h-full w-full bg-gradient-to-b from-black via-black to-gray-800 '>
            <div className='max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4 '>
                <div className='flex flex-col h-full justify-center mt-32 md:h-fit md:mt-40 '>
                <h2 className='  text-4xl sm:text-7xl font-bold text-white'>Your Friendly Neighborhood Developer </h2>
                <p className='text-gray-500 py-7 max-w-md'>
                   Hola !! Myself Kaushik Shetty . I am Frontend Developer and  love to work on web application using technologies like
            React and TailwindCss
                </p>
                <div>
                    <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-4  flex items-center  rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300 ml-1'><MdOutlineArrowRight size={25}/></span>
                    </Link>
                </div>
                </div>
                <div  >
                    <img src={Kaushik} alt="img" 
                        className= "rounded-full h-60 w-[30rem] mx-auto "
                    />
                </div>
            </div>

        </div>
    )
}

export default Home
