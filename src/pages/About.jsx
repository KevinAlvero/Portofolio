import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { skills, experiences } from '../constansts';
import CTA from '../component/CTA';
import Footer from '../component/Footer';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hi, I'm <span className='bg-gradient-to-r from-blue-800 via-green-500 to-yellow-500 bg-clip-text text-transparent font-semibold drop-shadow'>Kevin</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>I'm an undergraduate designer specializing in 3D enviroment design, pixel art, and game development. Passionate about crafting engaging characters and environments, I'm also learning frontend and backend development to create immersive experiences. Excited to blend artistry and technology, I aim to make a meaningful impact in the gaming industry.</p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div key={skill.name} className='block-container w-20 h-20'>
              <div className='btn-back rounded--xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img 
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Experience & Volunteer</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>Although I have not held formal work positions, I have gained valuable experience through volunteering and personal projects. My journey includes:</p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img 
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: '8px solid transparent',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none',
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p className='text-black-500 font-medium' style={{ margin: 0 }}>
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li key={`${experience.company_name}-point-${index}`} className='text-black-500/50 font-normal pl-1 text-sm'>
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
      <Footer />
    </section>
  );
};

export default About;
