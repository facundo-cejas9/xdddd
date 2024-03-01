import React from 'react'
import { ProjectsData } from '../data/data'

const Projects = () => {

  const { projects } = ProjectsData[0]


  return (
    <div id='projects' className="bg-gradient-to-b from-slate-700 to-gray-900 w-full md:w-auto p-5 md:p-32 rounded-lg text-center mt-20 shadow lg:shadow-2xl">
      <h1 className="text-center mt-[5rem] lg:mt-0 text-4xl md:text-6xl font-mono font-light text-gray-900">
        <span className='text-red-500'>P</span><span className='text-white'>ROYECTOS</span>
      </h1>

      <div className="container mx-auto grid grid-cols-1  xl:grid-cols-2 gap-20 mt-20 ">
        {projects.map(project => (
          <div className="flex flex-col items-center gap-1 bg-slate-600 rounded-2xl  p-10">

            <div>
              <p className="text-4xl font-medium text-white mb-5">{project.name}</p>
            </div>

            <div className='flex flex-col items-center'>
              <img className="flex justify-center items-center w-full lg:w-[35rem] h-full lg:h-[18rem]  rounded-xl" alt={ project.name } src={project.image} />
              <p className='text-md text-white font-thin mt-5 justify-center'> {project.description} </p>
            </div>

            <div className='flex w-full flex-col xl:flex-row gap-5 xl:gap-10 justify-center mt-5  p-8'>

              <a href={ project.link } target='_blank' >
                <button className='flex justify-center gap-2 py-2 px-10 w-full  xl:w-auto bg-gray-900 hover:bg-gray-800 transition duration-150 ease-out rounded-md text-white text-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-arrow-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                    <path d="M9 15h6" />
                    <path d="M12.5 17.5l2.5 -2.5l-2.5 -2.5" />
                  </svg>
                  Demo
                </button>
              </a>


              <a href={ project.github } target='_blank'>
                <button className='flex justify-center gap-2 py-2 px-10 w-full  xl:w-auto bg-gray-900 hover:bg-gray-800 transition duration-150 ease-out rounded-md text-white text-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill='#ffffff' width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                  Github
                </button>
              </a>
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}

export default Projects