import React from 'react';
import { FooterStyle, P, Name } from './Styled';
import { useServer } from '../../context';
import Social from '../Social';

const Footer = () => {

  const { DataSocial } = useServer();

  return (
    <FooterStyle>
      <Name>Papelería Golden</Name>
      {DataSocial.map(social => (
        <Social key={social.id} name={social.name} url={social.url}/>
      ))}
      <P>Todos los derechos reservados &copy; Papeleria Golden</P>
    </FooterStyle>
  )
};

export default Footer;