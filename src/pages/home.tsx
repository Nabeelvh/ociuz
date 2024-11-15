import React, { FC } from 'react';
import Button from '../components/button';
import HeroSection from '../components/hero-image';
import FooterPage from '../components/footer';
import Statspage from '../components/Stats';
import CollagesPage from '../components/collages';
import HeaderPage from '../components/header';

interface HomePageProps {
  
}

const HomePage: FC<HomePageProps> = ({}) => {
  return (
    <React.Fragment>
      <Button label={''}/>
      <HeaderPage/>
      <div>
        
          <HeroSection/>
          <Statspage/>
          <CollagesPage/>
      </div>
      <FooterPage/>
    </React.Fragment>
  );
};

export default HomePage;
