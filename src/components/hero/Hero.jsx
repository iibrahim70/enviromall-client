import React from 'react';
import jordanImg from '../../assets/hero/air-jordan.png'
import { BsArrowRight } from 'react-icons/bs';

const Hero = () => {
  return (
    <div className='bg-slate-100'>
      <div className='w-[90%] mx-auto min-h-[calc(100vh-68px)] flex items-center justify-center flex-col lg:flex-row py-10 lg:py-0 gap-y-10 lg:gap-y-10'>

        <div className='flex-1 space-y-5'>
          <div className='flex items-center gap-3'>
            <hr className='w-10 border-2 border-red-600'/>
            <p>Shoes New Collection</p>
          </div>
          <div className='flex items-center gap-3'>
            <h2 className='text-4xl lg:text-6xl font-bold'>Jordan Air</h2>
            <hr className='w-14 border-2 border-black'/>
          </div>
          <p className='font-semibold'>UPTO 50% OFF</p>
          <button className='inline-flex items-center justify-center capitalize lg:text-base lg:px-6 md:px-4 px-3 lg:py-3 py-2 font-medium text-white transition hover:drop-shadow-2xl rounded-full border-none shadow-xl md:mb-0 bg-[#4D4376] hover:bg-[#5E548E] duration-700 cursor-pointer'>Shop Now <BsArrowRight className='ml-2'/></button>
        </div>

        <div className='flex-1flex justify-end'>
          <img className='lg:h-[300px]' src={jordanImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;