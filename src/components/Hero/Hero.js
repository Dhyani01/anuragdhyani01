import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I'm Anurag Dhyani
        </SectionTitle>
        <SectionText>
        Computer science student with excellent problem-solving skills and interest in core CS Fundamentals and backend programming, also well versed in data structures & algorithms. <br /> In my professional experience I have worked on variety of real world problems.
        </SectionText>
        {/* <Button onClick={props.handleClick}>Curriculum Vitae</Button> */}
        <form method="get" action="https://drive.google.com/file/d/1qH4k4Pgm6DEwsCn6j19m1b8hHOc1ANu2/view">
    <Button type="submit">Curriculum Vitae</Button>
</form>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
