import React from 'react';

import LandingLayout from '../components/layout/LandingLayout';
import MainHero from '../components/sections/MainHero';
import PreviewCard from '../components/sections/Preview/PreviewCard';
import MainFeature from '../components/sections/Features/MainFeature';
import Mission from '../components/sections/Mission/Mission';
import Single from '../components/sections/Review/Single';
import UseCase from '../components/sections/UseCase/UseCase';
import { Text } from '@chakra-ui/react';

const Title = () => {
  return (
    <Text as='span'>
      WeShv community <br /> platform for{' '}
      <Text as='span' color='#ff24a4'>
      People In need 
      </Text>
    </Text>
  );
};

const Landing = (props) => {
  return (
    <div>
      <LandingLayout>
        <MainHero title={Title()} />
        <PreviewCard />
        <MainFeature />
        <Single
          text='WeShv'
          logo='https://global-uploads.webflow.com/5dc6336c6ade633733ef6e44/5f2a8dfbe566333b8805584c_forte-labs-p-500.png'
          my={20}
        />
        <Mission ctaLink='/signup' ctaText='start your community today' />
        <UseCase />
       
      </LandingLayout>
    </div>
  );
};
export default Landing;
