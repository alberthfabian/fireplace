import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BLACK, WHITE, ORANGE, device } from '../Styled';

export const Head = styled.header `
  display: flex;
  justify-content: center;
  background-color: ${BLACK};
  display: flex;
  align-items: center;
  @media ${device.mobileS} {
    height: 130px;
  }
  @media ${device.laptop} {
    height: 170px;
  }
  article {
    display: flex;
  }
`

export const StyledLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  h1 {
    color: ${WHITE};
    text-shadow: 1px 1px 1px ${ORANGE};
    margin-top: 0px;
    margin-bottom: 0px;
  }
`

export const Logo = styled.img `
  @media ${device.mobileS} {
    height: 70px;
  }
  @media ${device.laptop} {
    height: 100px;
  }
  &:hover {
    height: 105px;
  }
`

export const Div = styled.div ` 
  position: absolute;
  right: 25px;
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.tablet} {
    display: inline;
  }
 `