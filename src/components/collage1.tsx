import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

interface CollagePage1Props {

}

const CollagePage1: FC<CollagePage1Props> = ({ }) => {

  const { id } = useParams();

  return (
    <>
      <div className='p-4 place-content-center'>
        <div className='container '>
          <h1>
            This page is the Id :{id}
          </h1>
        </div>
      </div>

    </>
  );
};

export default CollagePage1;

