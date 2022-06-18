import React, { useEffect, useRef } from 'react';
import { srConfig } from '../../next.config';
// import sr from '../../utils/sr';
// import sr from 'scrollreveal';
import { usePrefersReducedMotion } from '../../hooks';

const About = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    async function animate() {
      if (typeof window !== 'undefined') {
        const sr = (await import('scrollreveal')).default;
        sr().reveal(revealContainer.current, srConfig());
      }
    }
    animate();
  }, []);

  if (typeof window === 'undefined') {
    return '';
  } else {
    return (
      <>
        <div
          id='about'
          className='w-full md:h-screen p-2 flex items-center py-16'
          ref={revealContainer}
        >
          <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
              <p className='uppercase text-xl tracking-widest text-blue'>
                About
              </p>
              <h2 className='py-4'>Who I am</h2>
              <p className='py-2 text-light-gray'>
                Hello, My name is Ely Fuentes an experienced Software Engineer
                with a demonstrated history of working in the computer software
                industry. Skilled in Node.js, Software Development, JavaScript,
                React js - Web Development. Strong engineering professional with
                a Bachelor's degree focused in Computer Science from Southern
                Adventist University.
              </p>
              <p className='py-2 text-light-gray'>
                I have had the privilage to work for many great company that
                have tought me how to beccome a better Developer. My main focus
                these days is building accessible, inclusive products and
                digital experiences at Upstatement for a variety of clients.{' '}
              </p>
            </div>
            <div className='w-auto h-[70%] m-auto shadow-xl shadow-blue rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300'>
              <img
                src='/assets/elyfuentes.jpg'
                className='rounded-xl h-[100%]'
              />
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default About;
