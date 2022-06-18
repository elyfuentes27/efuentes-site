import React from 'react';
import netflix from '../../public/assets/projects/netflix.png';
import starWar from '../../public/assets/projects/starWar.png';
import ProjectItems from '../ProjectItems';

const PersonalProjects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-blue'>Projects</p>
        <h2 className='py-4'>Some Things I've Build</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItems
            title='Netflix'
            backgroundImg={netflix}
            projectUrl='/netflix'
          />
          <ProjectItems
            title='StarWar'
            backgroundImg={starWar}
            projectUrl='/starWar'
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalProjects;
