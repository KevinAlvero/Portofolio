import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>Got a project brewing in your mind?<br className='sm:block hidden'  />Let's unleash our creativity and build something extraordinary together! </p>
        <Link to='/contact' className='btn '>
            Contact
        </Link>
    </section>
  )
}

export default CTA