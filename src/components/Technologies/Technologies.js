import React from 'react';
import { DiFirebase, DiHtml5, DiReact, DiRuby, DiUikit, DiWordpress, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
     <SectionDivider />
     <SectionTitle>Technology</SectionTitle>
     <SectionText>
      Becoming a Web developer introduced me to many different languages and skills,
       from Back-End development to Front-End design.
     </SectionText>
     <List>
      <ListItem>
        <DiHtml5 size= "3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Html, Css, Sass, Javascript, React.js,
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiWordpress size= "3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Figma & Wordpress
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiRuby size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
          Databases, Ruby on Rails, PHP, C#, Git/Github
          </ListParagraph>
        </ListContainer>
      </ListItem>
     </List>
  </Section>
);

export default Technologies;
