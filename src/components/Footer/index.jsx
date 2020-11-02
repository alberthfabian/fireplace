import React from 'react';
import linkedIn from '../../assets/Icons/LinkedIn.png';
import instagram from '../../assets/Icons/Instagram.png';
import twitter from '../../assets/Icons/Twitter.png';
import pinteres from '../../assets/Icons/Pinteres.png';
import facebook from '../../assets/Icons/Facebook.png';
import whatsApp from '../../assets/Icons/WhatsApp.png';
import youtube from '../../assets/Icons/Youtube.png';
import { FooterStyle, P, Name, Social } from './Styled';

const Footer = () => (
  <FooterStyle>
    <Name>Papelería Golden</Name>
    <a href='https://api.whatsapp.com/send?phone=573124563067' target='_blank' rel='noopener noreferrer'>
      <Social src={ whatsApp } alt='WhatsApp'/>
    </a>
    <a href='https://www.youtube.com/channel/UCvi2KWTO8kKJZUO8cdJ2b6g' target='_blank' rel='noopener noreferrer'>
      <Social src={ youtube } alt='Youtube'/>
    </a>
    <a href='https://www.facebook.com/papeleria.golden/' target='_blank' rel='noopener noreferrer'>
      <Social src={ facebook } alt='Facebook'/>
    </a>
    <a href='https://www.instagram.com/papeleriagolden/' target='_blank' rel='noopener noreferrer'>
      <Social src={ instagram } alt='Instagram'/>
    </a>
    <a href='https://www.linkedin.com/in/papeleria-golden-33b810100/' target='_blank' rel='noopener noreferrer'>
      <Social src={ linkedIn } alt='LinkedIn'/>
    </a>
    <a href='https://twitter.com/papeleriagolden' target='_blank' rel='noopener noreferrer'>
      <Social src={ twitter } alt='Twitter'/>
    </a>
    <a href='https://co.pinterest.com/papeleriagolden/_saved/' target='_blank' rel='noopener noreferrer'>
      <Social src={ pinteres } alt='Pinterest'/>
    </a>
    <P>Todos los derechos reservados &copy; 2020</P>
  </FooterStyle>
);

export default Footer;