import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiApple, DiAsterisk, DiCodeBadge, DiCssdeck, DiDojo, DiEclipse, DiGhost, DiUnitySmall, DiZend } from 'react-icons/di';
import { IoLogoGameControllerA, IoLogoGameControllerB, IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoLogoPlaystation } from 'react-icons/io';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
      <a style={{ display: "flex", alignitems: "center", color: "white", marginBottom: '20px' }}>
        <IoLogoGameControllerA size="3rem" /> <Span>Precursor Designz</Span>
      </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <link href='#about'></link>
        <NavLink>About</NavLink>
      </li>
      <li>
        <link href='#projects'></link>
        <NavLink>Projects & Games</NavLink>
      </li>
      <li>
        <link href='#contacts'></link>
        <NavLink>Contacts</NavLink>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/britishninja47">
       <IoLogoGithub size="4rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/jeremiah-harriott/">
       <IoLogoLinkedin size="4rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/britishboy_47/">
       <IoLogoInstagram size="4rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
