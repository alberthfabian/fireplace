import styled from 'styled-components';
import { BLACK, WHITE, device } from '../../components/Styled';

export const Div = styled.div `
  background-color: ${BLACK};
  padding-top: 20px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-gap: 20px;
  @media ${device.mobileS} {
    padding-bottom: 15%;
    grid-template-columns: 1fr;
  }
  @media ${device.tablet} {
    padding-bottom: 8%;
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.laptop} {
    padding-bottom: 6%;
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media ${device.desktop} {
    padding-bottom: 6%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`

export const H1 = styled.h1 ` 
  text-align: center;
  color: ${WHITE};
  background: ${BLACK};
  margin: 0px;
  padding: 20px;
`