import React, { Profiler } from 'react';

import Directory from '../../components/directory/directory.component';
import Hero from '../../components/hero/Hero.component';
import { HomePageContainer } from './homepage.styles';

const HomePage = () => (
  <HomePageContainer>
    <Profiler
      id='Directory'
      onRender={(id, phase, actualDuration) =>
        console.log({
          id,
          phase,
          actualDuration,
        })
      }
    >
      <Directory />
    </Profiler>
  </HomePageContainer>
);

export default HomePage;
