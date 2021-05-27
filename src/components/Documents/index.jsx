/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Div, Document, Video, Link } from './Styled';

const index = ({name, video, linkVideo, linkDocument}) => {

  const page = (page) => {
    window.open(page)
  }

  return (
    <Div>
      <span className="tooltiptext">{name}</span>
      <Document onClick={() => page(linkDocument)}>
        {name}
      </Document>
      <Video>
        <Link href={linkVideo} target='_blank' >{video}</Link> 
      </Video>
    </Div>
  );
};

export default index;