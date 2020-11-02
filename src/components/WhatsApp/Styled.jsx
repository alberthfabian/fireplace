import styled from 'styled-components';
import { WHITE } from '../Styled';

export const A = styled.a ` 
  text-decoration: none; 
`

export const Img = styled.img ` 
  position:fixed;
  width:47px;
  height:47px;
  bottom:43px;
  right:30px;
  &:hover {
    width:52px;
    height:52px;
  }
`

export const Message = styled.p ` 
  margin: 0px;
  z-index: 100;
  position: fixed;
  color: ${WHITE};
  font-family: 'Quicksand', sans-serif;
`

export const Chat = styled(Message) ` 
  bottom: 39px;
  right: 84px;
  color: ${WHITE};
  font-family: 'Quicksand', sans-serif;
  &:hover {
    font-size: 20px;
  }
`