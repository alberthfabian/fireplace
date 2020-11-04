import React from 'react';
import { Div, H1 } from './Styled';
import Sections from '../../components/Sections'
// import ModalDiploma from '../../components/ModalDiploma';
import { useServer } from '../../context';

const Fireplace = () => {

  const { DataFireplace } = useServer();
  
  return ( 
    <>
      <H1>Imágenes</H1>
      <Div id='Diploma'>
        {/* <ModalDiploma/> */}
        {DataFireplace.map(fireplace => (
          <span key={fireplace.id}>
            <Sections name={fireplace.name} id={fireplace.id}/>
          </span>
        ))}
      </Div>
    </>
  )
};

export default Fireplace;