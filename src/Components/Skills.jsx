import React from 'react'

function Skills() {
  return (

    <div className='px-10'>
      <div className='skills-container m-h-[80vh] '>

        <h1>Skills & Technologies</h1>
        <div className='flex flex-row flex-wrap'>

          <div className='sample '>
            <h2>Frontend</h2>
            <div className='samples'>
              <span>React</span>
              <span>TypeScript</span>
              <span>Javascript</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Tailwind CSS</span>
            </div>
          </div>

          <div className='sample'>
            <h2>Tools & Others</h2>
            <div className='samples'>
              <span>Git</span>
              <span>npm/pnpm</span>
              <span>vite</span>
              <span>Webpack</span>
              <span>Figma</span>
              <span>Responsive Design</span>
            </div>
          </div>
          <div className='sample'>
            <h2>Libraries & Frameworks</h2>
            <div className='samples'>
              <span>Next.js</span>
              <span>React Router</span>
              <span>Motion</span>
              <span>Radix UI</span>
              <span>Tailwind CSS</span>
            </div>
          </div>
        </div>



      </div>
    </div>

  )
}

export default Skills