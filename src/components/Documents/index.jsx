/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Div, Document, Video, Link, Value, Register } from './Styled';

const index = ({name, video, linkVideo, linkDocument, value, register}) => {

  const page = (page) => {
    window.open(page)
  }
  console.log('register', register);
  return (
    <Div>
      <span className="tooltiptext">{name}</span>
      <Document onClick={() => page(linkDocument)}>
        {name}
      </Document>
      <Video>
        <Link href={linkVideo} target='_blank' >{video}</Link> 
      </Video>
      <Value>
        {value ? `$ ${value}` : value}
      </Value>
      <Register>
        {register}
      </Register>
    </Div>
  );
};

export default index;