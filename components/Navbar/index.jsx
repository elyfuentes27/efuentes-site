import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#242424');
  const [linkColor, setLinkColor] = useState('#fff');
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === '/netflix' ||
      router.asPath === '/starwar' ||
      router.asPath === '/twitch'
    ) {
      setNavBg('transparent');
      setLinkColor('#ecf0f3');
    } else {
      setNavBg('#242424');
      setLinkColor('#fff');
    }
  }, [router]);

  const handleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);
  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-lg shadow-blue z-[100]'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        {/* <Image
          src='/../public/assets/navLogo.png'
          alt='/'
          width='125'
          height='50'
        /> */}
        <Link href='/'>
          <h2 className='italic ml-4 uppercase text-blue'>Fuentes</h2>
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b-2 no-underline'>
                Home
              </li>
            </Link>
            <Link href='/#about'>
              <li className='ml-10 text-sm uppercase hover:border-b-2 no-underline'>
                About
              </li>
            </Link>
            <Link href='/#skills'>
              <li className='ml-10 text-sm uppercase hover:border-b-2 no-underline'>
                Skills
              </li>
            </Link>
            <Link href='/#work'>
              <li className='ml-10 text-sm uppercase hover:border-b-2 no-underline'>
                Work Experience
              </li>
            </Link>
            <Link href='/#projects'>
              <li className='ml-10 text-sm uppercase hover:border-b-2 no-underline'>
                Projects
              </li>
            </Link>
            <Link href='/#contact'>
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
              <h2 className='italic ml-4 uppercase text-blue'>Fuentes</h2>
              <div
                className='rounded-full shadow-lg shadow-blue p-3 cursor-pointer'
                onClick={handleMenu}
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-500 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                {' '}
                Let&#39;s build something !!
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col text-white'>
            <ul className='uppercase '>
              <Link href='/'>
                <li onClick={() => setMenu(false)} className='py-4 text-sm'>
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setMenu(false)} className='py-4 text-sm'>
                  About
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setMenu(false)} className='py-4 text-sm'>
                  Skills
                </li>
              </Link>
              <Link href='/#work'>
                <li onClick={() => setMenu(false)} className='py-4 text-sm'>
                  Work Experience
                </li>
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setMenu(false)} className='py-4 text-sm'>
                  Contact
                </li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking text-blue'>Let&#39;s Connect</p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/ely-fuentes-856297165/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-blue p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/elyfuentes27'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-blue p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                <div className='rounded-full shadow-lg shadow-blue p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <AiOutlineMail />
                </div>
                <div className='rounded-full shadow-lg shadow-blue p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
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
