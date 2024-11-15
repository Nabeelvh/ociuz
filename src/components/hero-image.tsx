import React, { FC } from 'react';


interface HeroSectionProps {

}

const HeroSection: FC<HeroSectionProps> = ({ }) => {
  return (
    <>
      <div className='item-place-center'>
        <div className='container'>
          <div
            className=" h-[90vh] relative w-full h-screen bg-cover bg-center f-full"
            style={{ backgroundImage: 'url("/images/Hero-img.png")' }}
          >

            <div className="flex min-h-screen text-white align-middle justify-center pt-28 md:pt-52 ">
              <div className='text-center '>
                <h1 className='p-4 font-bold w-full text-[50px]  tracking-tight pb-5'>Explore the collages</h1>
                <input className='border rounded-full h-10 sm  md:h-12 w-60 md:w-[500px] ' type="text" />
                <div>
                  <button className='tracking-tight px-3 py-1 w-28  md:p-4 mt-6 bg-sky-400 rounded-full ' >Explore</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
