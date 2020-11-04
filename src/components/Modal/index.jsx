import React from 'react';
import { Div, Article, Img, Button } from './Styled';
import cross from '../../assets/Icons/Cross2.png'
import { getIcon } from '../Images';
import { useServer } from '../../context';

const Modal = () => {

  const { onlyFireplace, ModalClose, Open } = useServer();

  if (Open === false) {
    return null;
  }

  return (
    <Div onClick={() => ModalClose(false)}> 
      <Article>
        <Button onClick={() => ModalClose(false)}>
          <img src={cross} alt='Close'/>
        </Button>
        <Img src={getIcon(onlyFireplace.name)} alt={onlyFireplace.name}/>
      </Article>
    </Div> 
  )
};

export default Modal;