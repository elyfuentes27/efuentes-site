import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import Link from 'next/link';
const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className='text-xl tracking-widest uppercase text-blue'>Contact</p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/*left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-blue rounded-xl p-4'>
            <div className='lg:p-2 h-full'>
              <div>
                <img
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src='https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80'
                />
              </div>
              <div>
                <h2 className='py-2'>Ely Fuentes</h2>
                <p>Software Engineer</p>
                <p className='py-4'>Contact me and Let's Talk</p>
              </div>
              <div>
                <p className='uppercase pt-8'>Connect with me :</p>
                <div className='flex item justify-between py-4'>
                  <a
                    href='https://www.linkedin.com/in/ely-fuentes-856297165/'
                    target='_blank'
                  >
                    <div className='rounded-full shadow-lg shadow-blue p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a href='https://github.com/elyfuentes27' target='_blank'>
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
          {/* Right Side  */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-blue rounded-xl lg:p4'>
            <div className='p-4'>
              <form>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-medium-gray'
                      type='text'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Number</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-medium-gray'
                      type='text'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-medium-gray'
                    type='email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 flex border-medium-gray'
                    rows='10'
                  ></textarea>
                </div>
                <div>
                  <button className='w-full p-4 bg-gradient-to-r from-blue-400 to-blue-300 hover:from-blue text-white font-bold shadow-none rounded'>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-16'>
          <Link href='/'>
            <div className='rounded-full shadow-lg shadow-blue p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <HiOutlineChevronDoubleUp
                size={30}
                className='m-auto text-blue'
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
