import styled from 'styled-components';
import { BLACK, ORANGE, device } from '../../components/Styled';

export const Div = styled.div `
  display: flex;
  justify-content: center;
  background-color: ${BLACK};
`

export const Card = styled.div ` 
  display: grid;
  grid-gap: 20px;
  @media ${device.mobileS} { 
    grid-template-columns: 1fr;
  }
  @media ${device.mobileM} { 
    grid-template-columns: 1fr;
  }
  @media ${device.mobileL} { 
    grid-template-columns: 1fr;
  }
  @media ${device.tablet} { 
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.laptop} { 
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media ${device.laptopL} { 
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media ${device.desktop} { 
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export const Title = styled.h3 `
  color:  ${ORANGE};
  margin: 0px;
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: ${BLACK};
  text-align: center;
`