import React from 'react'

const About = () => {
  return (
    <div name="about" className=' w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
        <p  className="text-4xl font-bold inline border-b-4 border-gray-500 ">About</p>
        </div>
        <p className='text-xl mt-20'>Myself Kaushik Shetty from Nashik , Maharahtra . Currently I am pursuing Btech degree from VIT Chennai in CSE spl. with AI and Robotics.I pursued my primary education from Nirmala Convent High School , Nashik</p>
        <br/>
        <p className='text-xl'>I got interested in Web Dev the day I started it. Currently I am just a Frontend Developer but My future goals aren't the same. I wanna be a Full Stack Developer. I am also member of Web-Dev teams for two clubs in my college - PlaceXP and CYSCOM</p>
    </div>
      
    </div>
  )
}

export default About
