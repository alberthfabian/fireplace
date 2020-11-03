import styled from 'styled-components';
import { WHITE, RED, BLACK, device } from '../Styled';

export const FooterStyle = styled.footer `
  background-color: ${BLACK};
  height: 130px;
  text-align: center;
  margin-top: -25px;
  padding-top: 8px; 
`

export const P = styled.p ` 
  color: ${WHITE};
  font-family: 'Quicksand', sans-serif;
  margin-top: 10px;
  @media ${device.mobileS} {
    font-size: 8px;
  }
  @media ${device.tablet} {
    font-size: 12px;
  }
`

export const Name = styled.p `
  color: ${RED};
  font-family: 'Quicksand', sans-serif;
  margin-bottom: 10px;
`

export const Social = styled.img `
  margin-right: 10px;
  &:hover {
    height: 28px;
  }
  @media ${device.mobileS} {
    height: 25px;
  }
`