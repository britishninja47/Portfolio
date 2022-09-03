import React from 'react';
import { AiFillGithub, AiFillHeart, AiFillInstagram, AiFillLinkedin, AiOutlineHeart } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
       <LinkColumn>
       <LinkTitle>Phone</LinkTitle>
       <LinkItem href="07943686993">07943686993</LinkItem>
       </LinkColumn>
       <LinkColumn>
       <LinkTitle>Email</LinkTitle>
       <LinkItem href="Harriott_47@hotmail.com">Harriott_47@hotmail.com"</LinkItem>
       </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>"LEVEL UP"</Slogan> <AiFillHeart></AiFillHeart><AiFillHeart></AiFillHeart><AiFillHeart></AiFillHeart><AiOutlineHeart></AiOutlineHeart>
        </CompanyContainer>
        <SocialIcons href='https://github.com/britishninja47'>
          <AiFillGithub size= "4rem" />
        </SocialIcons>
        <SocialIcons href='https://www.linkedin.com/in/jeremiah-harriott/'>
          <AiFillLinkedin size= "4rem" />
        </SocialIcons>
        <SocialIcons href='https://www.instagram.com/britishboy_47/'>
          <AiFillInstagram size= "4rem" />
        </SocialIcons>
      </SocialIconsContainer>

    </FooterWrapper>
  );
};

export default Footer;
