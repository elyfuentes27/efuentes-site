import React from 'react';
import SkillCards from '../SkillCards';
const skills = [
  {
    name: 'html',
    imUrl: '/../public/assets/skills/html.png',
  },
  {
    name: 'css',
    imUrl: '/../public/assets/skills/css.png',
  },
  {
    name: 'tailwind',
    imUrl: '/../public/assets/skills/tailwind.png',
  },
  {
    name: 'Javascript',
    imUrl: '/../public/assets/skills/javascript.png',
  },
  {
    name: 'Node',
    imUrl: '/../public/assets/skills/node.png',
  },
  {
    name: 'React',
    imUrl: '/../public/assets/skills/react.png',
  },
  {
    name: 'github',
    imUrl: '/../public/assets/skills/github1.png',
  },
];

const Skills = () => {
  return (
    <div className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-blue'>Skills</p>
        <h2 className='py-4'>What I can do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {skills.map((skill, key) => (
            <SkillCards skill={skill?.name} img={skill?.imUrl} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
