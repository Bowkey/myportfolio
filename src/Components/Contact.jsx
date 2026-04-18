import React from 'react'
import { CiMail } from 'react-icons/ci'
import { FiGithub } from 'react-icons/fi'
import { LuLinkedin } from 'react-icons/lu'
import { CiLocationOn } from 'react-icons/ci'

function Contact() {

  const action = 'realjason93@gmail.com'
  return (
    <div className='px-8 py-40 bg-gradient from-neutral-50 to-neutral-200-100 '>
      <h1>Get in Touch</h1>
      <div className='flex flex-col md:flex-row gap-10 '>
        <div className='flex-1'>
          <div>
            <h2 className='py-4'>Let's Connect</h2>
            <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!</p>
          </div>
          <div className='text-black flex flex-col gap-5 my-8'>

            <div className=' contact  flex flex-row gap-2'>
              
              <span className='contact-id'><CiMail /></span>
              <span><a href="mailto:realjason93@gmail.com"> realjason93@gmail.com</a></span>

            </div>
            <div className='   flex flex-row gap-2'>
              <span className='contact-id'><CiLocationOn /></span>
              <span>Port Harcourt, Nigeria</span>
            </div>
            <div className=' contact  flex flex-row gap-2'>

              <span className='contact-id'><FiGithub /></span>
              <span><a href="http://www.github.com/Bowkey" target="_blank" rel="noopener noreferrer">github.com/Bowkey</a></span>
            </div>
            <div className=' contact  flex flex-row gap-2'>

              <span className='contact-id'><LuLinkedin /></span>
              <span><a href="http://ng.linkedin.com/ng/bokizibe-luke-3045b42ab" target="_blank" rel="noopener noreferrer">linkedin.com/BokizibeLuke</a></span>
            </div>

          </div>
        </div>


        <div className='px-4 flex-1'>
          <form action= {`https://formsubmit.co/${action}`} method='POST'>
            <div className='flex flex-col px-4 rounded-2xl border-2 bg-white border-neutral-100 py-4 '>

              <label htmlFor="name">Name</label>

              <input type="text" name="name" id="name" placeholder='Your Name' />

              <label htmlFor="email">Email</label>

              <input type="email" name="emai" id="email" placeholder='Your Email' />

              <label htmlFor="message">Message</label>

              <textarea name="message" id="message" placeholder='Your message...' rows="4"></textarea>

              <button type="submit" className='my-10 bg-blue-700'>Send Message</button>
              
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact