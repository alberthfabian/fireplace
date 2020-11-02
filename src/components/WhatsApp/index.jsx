import React from 'react';
import { A, Img, Chat } from './Styled';
import whatsAppImg from '../../assets/Icons/WhatsApp.png'; 

const WhatsApp = () => {
  return (
    <>
      <A href='https://api.whatsapp.com/send?phone=573124563067' target='_blank'>
        <Chat>Chatea conmigo</Chat><br/> 
        <Img src={whatsAppImg} alt='WhatsApp'/>
      </A>
    </>
  )
};

export default WhatsApp;