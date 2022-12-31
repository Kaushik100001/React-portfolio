import React from 'react'

const Portfolio = () => {
      let portfolios =[
        {
            id:1  ,
            src:"https://images.unsplash.com/photo-1551431009-a802eeec77b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            href:"https://github.com/Kaushik100001/Dice-Game"
        },
        {
            id:2  ,
            src:"https://images.unsplash.com/photo-1647788738100-e138bf960f30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRydW1raXR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
            href:"https://github.com/Kaushik100001/Drum-kit"
        },
        {
            id:3  ,
            src:"https://images.unsplash.com/photo-1484069560501-87d72b0c3669?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cXVlc3Rpb258ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
            href:"https://github.com/Kaushik100001/QuizAPP"
        },
        {
            id:4  ,
            src:"https://images.unsplash.com/photo-1598791318878-10e76d178023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dG8lMjBkb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            href:"https://github.com/Kaushik100001/TO-DO-App"
        },
      ]



  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 text-white pt-8 md:h-screen'>
     <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p  className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
            <p className="py-6">Check out  some work here</p>
        </div>

        <div  className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 sm:px-0">
      {portfolios.map((portfolio)=>(
      
            <div key={portfolio.id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={portfolio.src}
                 alt="" 
                 className='rounded-md duration-200 hover:scale-105'
                 />
            
            <div className='flex items-center justify-center'>
                <a  href={portfolio.href} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 cursor-pointer">Code</a>
                {/* <button  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button> */}
            </div>
            </div>
        
     

      ))}
      </div>



       
      </div>
    </div>
  )
}

export default Portfolio
