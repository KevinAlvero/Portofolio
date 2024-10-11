import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm: text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>Hi, I am <span className='font-semibold'> Kevin Alvero </span> 🖐️ <br /> A Computer Science Undergraduate from Bina Nusantara University Indonesia</h1>
    ), 
    2: (
        <InfoBox 
            text='Discover My Story as a Computer Science Undergraduate at Bina Nusantara University'
            link="/about"
            btnText="Learn more"
        />
    ), 
    3: (
        <InfoBox 
            text='Dive into My Portfolio highlighting Unique Personal and University Projects in Computer Science'
            link="/projects"
            btnText="Visit my portfolio"
        />
    ), 
    4: (
        <InfoBox 
            text="I'd Love to Hear From You! Reach Out Anytime 😄"
            link="/contact"
            btnText="Let's Talk"
        />
    ), 
}



const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo