// React Packages
import React from 'react';

// Data
import { overview } from '../data';

const Overview = () => {
  // Destructure Overview Data
  const { productImg } = overview;
  return (
    <section className='lg:min-h-[712px] bg-gradient-to-br from-blue-300 via-orange-300 to-red-400 bg-cover bg-left-top pt-[30px] lg:pt-[87px]'>
      <div className='container mx-auto flex justify-end overflow-hidden'>
        <img 
          src={productImg} 
          alt=""
          data-aos='fade-up'
          data-aos-offset='300'
        />
      </div>
    </section>
  )
};

export default Overview;
