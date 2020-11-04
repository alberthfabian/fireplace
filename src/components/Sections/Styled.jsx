import styled from 'styled-components';
import { device, ORANGE } from '../Styled'

export const Button = styled.button ` 
  text-align: center;
  border: 0px solid;
  background-color: transparent;
  cursor: pointer;
  img {
    border-radius: 10px;
    &:hover {
      box-shadow: 0px 0px 30px 0px ${ORANGE};
    }
  }
  @media ${device.mobileS} {
  img {
    width: 250px;
    height: 250px;
  }
  @media ${device.mobileM} {
  img {
    width: 270px;
    height: 270px;
  }
  @media ${device.mobileL} {
  img {
    width: 290px;
    height: 290px;
  }
  @media ${device.laptopL} {
  img {
    width: 320px;
    height: 320px;
  }
`