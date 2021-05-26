import styled from 'styled-components';
import { BLACK, WHITE, ORANGE, device } from '../../components/Styled';

export const Div = styled.div ` 
  display: grid;
  grid-gap: 20px;
  background-color: ${BLACK};
  p {
    color:${WHITE};
  }
  @media ${device.mobileS} {
    grid-template-columns: 1fr;
  }
`
export const Article = styled.div ` 
  margin: auto;
  margin-top: 40px;
  @media ${device.mobileS} {
    width: 250px;
    height: 350px;
    padding-bottom: 20px;
  }
  @media ${device.mobileM} {
    width: 310px;
    height: 380px;
  }
  @media ${device.mobileL} {
    width: 340px;
    height: 400px;
  }
  @media ${device.tablet} {
    width: 600px;
    height: 500px;
  }
  @media ${device.laptop} {
    width: 800px;
    height: 500px;
    padding-bottom: 40px;
  }
  @media ${device.laptopL} {
    width: 1200px;
    height: 600px;
  }
`

export const Data = styled.div ` 
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  p {
    color: ${WHITE};
    @media ${device.mobileS} {
      font-size: 14px;
    }
    @media ${device.mobileM} {
      font-size: 16px;
    }
    @media ${device.laptop} {
      font-size: 22px;
    }
  }
  h2 {
    color: ${ORANGE};
    text-shadow: 1px 1px 1px ${WHITE};
    @media ${device.laptop} {
      font-size: 30px;
    }
  }
  h3 {
    color: ${WHITE};
    text-shadow: 1px 1px 1px ${WHITE};
    border: 3px solid ${ORANGE};
    @media ${device.laptop} {
      font-size: 28px;
    }
  }
`

export const H2 = styled.h2 ` 
  color: ${ORANGE};
  margin-top: 0px;
`