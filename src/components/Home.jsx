import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#A799B7]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#FB3640] text-2xl font-medium'>Hi, I am</p>
      
       
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Dilek Canturk
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#0F3460]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#0F3460] py-4 max-w-[700px]'>
          I’m a full-stack developer. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button className='text-[#ccd6f6] border-[#ccd6f6] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#B61919] hover:border-[#B61919]'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
