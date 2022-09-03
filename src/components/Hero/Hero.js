import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Why Hello There, I'm <br />
        Jeremiah Harriott
        <h6> Jr. Full-Stack Web Developer </h6>
      </SectionTitle>
      <SectionText>
      I am a Junior Full-stack Web Developer from Toronto, Canada and aiming to become a stronger web developer and video game developer. I enjoy learning and creating diffrent applications
            for users just like you. I recently finished my very first interactive 2-player fighter called "Samurai-Code" so feel free to try it out.
      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/jeremiah-harriott/'}>Lets Connect</Button>
    </LeftSection>
  </section>
);

export default Hero;
