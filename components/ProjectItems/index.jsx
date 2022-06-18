import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ProjectItems = ({ title, backgroundImg, projectUrl }) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-blue rounded-xl p-2 group hover:bg-gradient-to-r from-blue to-light-blue bg-light-gray'>
      <Image
        src={backgroundImg}
        alt='/'
        className='rounded-xl group-hover:opacity-10'
      />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-center'>Reactjs</p>
        <Link href={projectUrl}>
          <p className='text-center py-4 px-2 rounded-lg bg-white text-medium-gray font-bold text-lg cursor-pointer'>
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItems;
