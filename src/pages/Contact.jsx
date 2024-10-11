import { Suspense, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';

import Bird from '../models/Bird';
import Loader from '../component/Loader';
import useAlert from '../hooks/useAlert';
import Alert from '../component/Alert';


const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setcurrentAnimation] = useState('idle');

  const {alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    setIsLoading(true);

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Adrian",
        from_email: form.email,
        to_email: 'alverosurono@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);
      // TODO: Show Success Message
      showAlert({ show: true, text: 'Message sent succesfully!', type: 'succes' })
      
      setTimeout(() => {
        hideAlert();
        setcurrentAnimation();
        setForm({ name: '', email: '', message: '' }); 
      }, [3000])

    }).catch((error) => {
      setIsLoading(false);
      console.error(error);
      showAlert({ show: true, text: 'I didnt receive your message', type: 'danger' })
    });
  };

  const handleFocus = () => setcurrentAnimation('Take 001');
  const handleBlur = () => setcurrentAnimation();

  return (
    <section className='relative flex lg:flex-row flex-col max-container h-[100vh]'>
      {alert.show && <Alert { ...alert } />}

      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>

        <form 
          ref={formRef}
          className='w-full flex flex-col gap-7 mt-14'
          onSubmit={handleSubmit}
        >
          <label className='text-black-500 font-semibold'>
            Name
            <input 
              type='text'
              name='name'
              className='input'
              placeholder='John'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input 
              type='email'
              name='email'
              className='input'
              placeholder='john@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Message
            <textarea 
              name='message'
              rows={4}
              className='textarea'
              placeholder='Let me know how I can help you!'
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type='submit'
            className='btn'
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      <div className='lg:2-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 9],
            fov: 90,
            near: 0.1, 
            far: 1000
          }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={.5} />
          <Suspense fallback={<Loader />}>
            <Bird 
              currentAnimation={currentAnimation}
              position={[-1, -1, -1]}
              rotation={[12.6, 3.8, .2]}
              scale={[0.013, 0.013, 0.013]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
