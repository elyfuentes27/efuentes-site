import Image from 'next/image';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-xs tracking-widest text-light-gray py-10'>
            People don&#39;t care about what you say, <br /> they care about
            what you build. -
            <a
              className='border-b border-b-blue'
              href='https://en.wikipedia.org/wiki/Mark_Zuckerberg'
              target='_blank'
              rel='noreferrer'
            >
              Mark Zuckerberg
            </a>
          </p>
          <h1 className='py-4 ml-4'>
            Hi, I&#39;m <span className='text-blue'>Ely Fuentes</span>
          </h1>
          <h1 className='py-4'>A Lead Front-End Web Developer</h1>
          <p className='py-4 text-light-gray max-w-[70%] m-auto'>
            I&#39;m a Software Engineer with a demonstrated history of working
            in the computer software industry. Strong engineering professional
            with a Bachelor&#39;s degree focused in Computer Science.
            Specializing in Building exceptional digital experience.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/ely-fuentes-856297165/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-blue p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/elyfuentes27'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-blue p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <div className='rounded-full shadow-lg shadow-blue p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineMail />
            </div>
            <div className='rounded-full shadow-lg shadow-blue p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
