import styled from 'styled-components';
import { device } from '../Styled'

export const Section = styled.section ` 
  text-align: center;
  img {
    border-radius: 10px;
  }
  @media ${device.mobileS} {
  img {
    width: 200px;
    height: 200px;
  }
  @media ${device.mobileM} {
  img {
    width: 250px;
    height: 250px;
  }
  @media ${device.mobileL} {
  img {
    width: 270px;
    height: 270px;
  }
  @media ${device.laptopL} {
  img {
    width: 320px;
    height: 320px;
  }
`