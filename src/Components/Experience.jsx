import React from 'react'

const Experience = () => {
   
        let techs =[
          {
              id:1  ,
              src:"https://cdn-icons-png.flaticon.com/128/174/174854.png",
              style:"shadow-orange-500"
          },
          {
              id:2  ,
              src:"https://cdn-icons-png.flaticon.com/128/732/732190.png",
              style:"shadow-blue-500"
          },
          {
              id:3  ,
              src:"https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
              style:"shadow-yellow-500"
          },
          {
              id:4  ,
              src:"https://cdn-icons-png.flaticon.com/128/5968/5968672.png",
              style:"shadow-purple-400"
          },
          {
            id:5 ,
            src:"https://cdn-icons-png.flaticon.com/128/919/919851.png",
            style:"shadow-blue-600" 
        },
        {
            id:6 ,
            src:"https://cdn-icons-png.flaticon.com/128/889/889111.png",
            style:"shadow-gray-400" 
        },
        ]






  return (
    <div 
    name="experience"
    className="bg-gradient-to-b from-gray-800 to-black md:h-screen ">
    <div  className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
        <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

{
    techs.map((tech)=>(
        <div  key={tech.id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${tech.style}`}>
                <img src={tech.src} alt="" />
         </div>

    ))
}





           
        </div>
    </div>
      
    </div>
  )
}

export default Experience
