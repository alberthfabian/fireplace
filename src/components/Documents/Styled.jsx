import styled from 'styled-components';
import { WHITE, BLACK, ORANGE } from '../Styled';

export const Div = styled.div `
  background-color: ${BLACK};
  margin: 10px;
  width: 300px;
  border: 2px solid ${WHITE};
  border-radius: 3px;
`

export const Document = styled.button ` 
  font-family: 'Quicksand', sans-serif;
  font-weight: bold;
  width: 100%;
  height: 50px;
  outline: none;
  cursor: pointer;
  background-color: ${WHITE};
  border: 2px solid ${WHITE};
  color: ${ORANGE};
  font-size: 16px;
  border-radius: 3px;
  :hover {
    background-color: ${ORANGE};
    color: ${WHITE};
  }
  :focus {
    outline: none;
    box-shadow: none;
  }
`

export const Video = styled.div `
  color: ${WHITE};
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  font-family: 'Quicksand', sans-serif;
`

export const Link = styled.a ` 
  text-decoration: none;
  color: ${WHITE};
  cursor: pointer;
  :hover {
    color: ${ORANGE};
  }
`