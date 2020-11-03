import React from 'react';
import { getIcon } from '../Images';
import { Section } from './Styled';

const Sections = (props) => {
  
  const { name } = props; 
  
  return (
    <>
      <Section>
        <img src={getIcon(name)} alt={name}/>
      </Section>
    </>
  )
};

export default Sections;