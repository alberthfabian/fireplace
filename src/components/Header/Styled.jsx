import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BLACK, WHITE } from '../Styled';

export const Head = styled.header `
  display: flex;
  justify-content: center;
  height: 130px;
  background-color: ${BLACK};
  display: flex;
  align-items: center;
  article {
    display: flex;
  }
`

export const StyledLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  h1 {
    color: ${WHITE};
    margin-top: 0px;
    margin-bottom: 0px;
  }
`

export const Logo = styled.img `
  height: 70px;
  &:hover {
    height: 75px;
  }
`