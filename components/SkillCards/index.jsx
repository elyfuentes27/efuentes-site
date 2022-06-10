import React from 'react';
import Image from 'next/image';

const SkillCards = ({ skill, img }) => {
  return (
    <div className='p-6 shadow-xl shadow-blue rounded-xl hover:scale-105 ease-in duration-300'>
      <div className='grid grid-cols-2 gap-4 justify-center items center'>
        <div className='m-auto'>
          {img && <Image src={img} width={64} height={66} alt='/' />}
        </div>
        <div className='flex felx-col items-center justify-center'>
          <h3>{skill}</h3>
        </div>
      </div>
    </div>
  );
};

export default SkillCards;
