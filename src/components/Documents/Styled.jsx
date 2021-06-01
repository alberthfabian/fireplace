import styled from 'styled-components';
import { WHITE, BLACK, ORANGE } from '../Styled';

export const Div = styled.div `
  background-color: ${BLACK};
  width: 100px;
  border: 2px solid ${WHITE};
  border-radius: 3px;
  position: relative;
  :hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
  .tooltiptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }
  .tooltiptext {
    font-size: 16px;
    visibility: hidden;
    width: 180px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: 110%;
    left: 20%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;
  }
`

export const Register = styled.div ` 
  text-align: center;
  color: ${WHITE};
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
  font-size: 11px;
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
  padding-top: 8px;
  padding-bottom: 8px;
  font-family: 'Quicksand', sans-serif;
`

export const Value = styled.div `
  color: ${ORANGE};
  text-align: center;
  padding-top: 8px;
  padding-bottom: 8px;
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