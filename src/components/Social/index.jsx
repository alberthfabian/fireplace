import React from 'react';
import { getSocial } from '../ImgIcons';
import { SocialNetwork } from './Styled';

const Social = (props) => {

  const { url, name } = props;

  return (
    <>
      <a href={url} target='_blank' rel='noopener noreferrer'>
        <SocialNetwork src={ getSocial(name) } alt={name}/>
      </a>
    </>
  )
};

export default Social;

