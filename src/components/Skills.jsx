import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Mongo from '../assets/mongo.png';
import Cypress from '../assets/cypress.png';
import Expressjs from '../assets/expressjs.png';
import Postgresql from '../assets/postgresql.png';
import Typescript from '../assets/typescript.png';
import Bootstrap from '../assets/bootstrap.png';




const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen   bg-[#A799B7] text-[#ccd6f6]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-[#FB3640] '>Skills</p>
              <p className='py-4'> These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8   '>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#372948]'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#372948]'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#372948]'>
                  <img className='w-20 mx-auto' src={Bootstrap} alt="HTML icon" />
                  <p className='my-4'>Bootstrap</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#372948]'>
                  <img className='w-20 mx-auto' src={Typescript} alt="HTML icon" />
                  <p className='my-4'>TypeScript</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#372948]'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JavaScript</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#372948]'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#372948]'>
                  <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#372948]'>
                  <img className='w-20 mx-auto' src={Expressjs} alt="HTML icon" />
                  <p className='my-4'>ExpressJS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#372948]'>
                  <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#372948]'>
                  <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                  <p className='my-4'>MONGO DB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#372948]'>
                  <img className='w-20 mx-auto' src={Postgresql} alt="HTML icon" />
                  <p className='my-4'>PostgreSQL</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#372948]'>
                  <img className='w-20 mx-auto' src={Cypress} alt="HTML icon" />
                  <p className='my-4'>Cypress</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;