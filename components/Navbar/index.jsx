import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className='fixed w-full h-20 shadow-xl shadow-violet z-[100]'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        {/* <Image
          src='/../public/assets/navLogo.png'
          alt='/'
          width='125'
          height='50'
        /> */}
        <h2 className='italic ml-4 uppercase text-violet'>Fuentes</h2>
        <div>
          <ul className='hidden md:flex'>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b-2 no-underline'>
                Home
              </li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b-2 no-underline'>
                About
              </li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b-2 no-underline'>
                Skills
              </li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b-2 no-underline'>
                Work Experience
              </li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b-2 no-underline'>
                Projects
              </li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b-2 no-underline'>
                Contact
              </li>
            </Link>
          </ul>
          <div className='md:hidden' onClick={handleMenu}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          menu
            ? 'md:hidden visible fixed left-0 top-0 w-full h-screen bg-black/70'
            : ''
        }
      >
        <div
          className={
            menu
              ? 'fixed left-0 top-0 w-[75%] sm:w-[45%] md:w-[45%] h-screen bg-[#3a3a3b] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex justify-between items-center'>
              <h2 className='italic ml-4 uppercase text-violet'>Fuentes</h2>
              <div
                className='rounded-full shadow-lg shadow-violet p-3 cursor-pointer'
                onClick={handleMenu}
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-500 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                {' '}
                Let's build something !!
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col text-white'>
            <ul className='uppercase '>
              <Link href='/'>
                <li className='py-4 text-sm'>Home</li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm'>About</li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm'>Skills</li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm'>Work Experience</li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm'>Contacts</li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking text-violet'>Let's Connect</p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <div className='rounded-full shadow-lg shadow-violet p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaLinkedinIn />
                </div>
                <div className='rounded-full shadow-lg shadow-violet p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaGithub />
                </div>
                <div className='rounded-full shadow-lg shadow-violet p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <AiOutlineMail />
                </div>
                <div className='rounded-full shadow-lg shadow-violet p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
