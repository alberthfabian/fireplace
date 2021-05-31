import styled from 'styled-components';
import { WHITE, ORANGE } from '../../Styled';

export const Button = styled.button ` 
  margin-right: 20px;
  background-color: ${WHITE}; 
  cursor: pointer;
  :hover {
    background-color: ${ORANGE}; 
  }
`