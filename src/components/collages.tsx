import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface CollagesPageProps {

}

const CollagesPage: FC<CollagesPageProps> = ({ }) => {
  return (
    <>
      <div className='p-4'>
        <div className='container'>
          <div className="flex justify-center p-4">
            <div className="border border-2 rounded-3xl  border-sky p-10 shadow-xl w-full sm:w-3/4 md:w-2/3 lg:w-1/2  bg-white shadow-md place-items-center">
              <h1 className="text-gray-700 text-[35px] font-bold italic">collages</h1>
              <div className='grid grid-cols-2 gap-2 mb-4'>
                <Link to="/collage/1"
                  className="mt-4 px-4 py-2  text-black rounded border border-2   border-sky transition"
                >
                  collage1
                </Link>
                <Link to="/collage/2"
                  className="mt-4 px-4 py-2  text-black rounded border border-2  border-sky transition"
                >
                  collage2
                </Link>
                <Link to="/collage/3"
                  className="mt-4 px-4 py-2  text-black rounded border border-2  border-sky transition"
                >
                  collage3
                </Link>
                <Link to="/collage/4"
                  className="mt-4 px-4 py-2  text-black rounded border border-2  border-sky transition"
                >
                  collage4
                </Link>
          
              </div>
              <Link to="/collagelist"
                className="mt-4 px-4 py-2 text-black rounded border border-2 border-sky transition"
              >
                View all collages
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollagesPage;

