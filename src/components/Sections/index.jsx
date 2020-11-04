import React from 'react';
import { getIcon } from '../Images';
import { useServer } from '../../context';
import { Button } from './Styled';

const Sections = (props) => {
  
  const { name, id } = props; 
  const { ImgFire } = useServer(); 
  
  return (
    <>
      <Button id={id} onClick={() => {ImgFire(id)}}>
        <img src={getIcon(name)} alt={name}/>
      </Button>
    </>
  )
};

export default Sections;