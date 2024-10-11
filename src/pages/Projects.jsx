import { Link } from 'react-router-dom';
import { projects } from '../constansts';
import { arrow } from '../assets/icons';
import CTA from '../component/CTA';
import Footer from '../component/Footer';

const Project = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My <span className='bg-gradient-to-r from-blue-800 via-green-500 to-yellow-500 bg-clip-text text-transparent font-semibold drop-shadow'>Projects</span>
      </h1>

      <div className='mt-5' flex flex-col gap-3 text-slate-500>
        <p>Throughout my college journey, I’ve developed several personal projects that showcase my passion for technology and innovation. These projects reflect my commitment to continuous learning in AI and web development.</p>
      </div>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme} `}/>
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img 
                  src={project.iconUrl}
                  alt="Project Icon"
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>
                {project.description}
              </p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600 hover:opacity-50 mr-5' 
                >
                  Github
                </Link>
                {/* <img 
                  src={arrow}
                  alt="arrow"
                  className='w-4 h-4 object-contain' 
                /> */}
                <Link
                  to={project.link1}
                  target='blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600 hover:opacity-50' 
                >
                  Live Demo
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='broder-slate-200'/>

      <CTA />
      <Footer />
    </section>
  )
}

export default Project