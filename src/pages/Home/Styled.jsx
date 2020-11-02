import styled from 'styled-components';
import { WHITE, RED, BLACK, device } from '../../components/Styled';

export const Div = styled.div `
  display: flex;
  justify-content: center;
`;

export const Mountains = styled.img `
  width: 100%;
  height: 600px;
  @media ${device.mobileS} { 
    height: 250px;
  }
  @media ${device.mobileM} { 
    height: 300px;
  }
  @media ${device.mobileL} { 
    height: 350px;
  }
  @media ${device.tablet} { 
    height: 400px;
  }
  @media ${device.laptop} { 
    height: 450px;
  }
  @media ${device.laptopL} { 
    height: 650px;
  }
  @media ${device.desktop} { 
    height: 900px;
  }
`;

export const Photo = styled.img `
  width: 270px;
  height: 280px;
  position: absolute;
  margin-top: 3%;
  border-radius:150px;
  &:hover {
    -webkit-box-shadow: 0px 0px 17px 0px ${RED};
    -moz-box-shadow: 0px 0px 17px 0px ${RED};
    box-shadow: 0px 0px 17px 0px ${RED};
  }
  @media ${device.mobileS} { 
    width: 180px;
    height: 200px;
    margin-top: 17%;
  }
  @media ${device.mobileM} { 
    width: 180px;
    height: 200px;
    margin-top: 17%;
  }
  @media ${device.tablet} { 
    width: 220px;
    height: 240px;
    margin-top: 6%;
  }
  @media ${device.laptop} { 
    width: 260px;
    height: 280px;
    margin-top: 4%;
  }
  @media ${device.laptopL} { 
    margin-top: 4%;
  }
  @media ${device.desktop} { 
    margin-top: 2%;
  }
`;

export const Name = styled.p `
  font-family: 'Quicksand', sans-serif;
  color: ${BLACK};
  text-align: center;
  font-size: xx-large;
  @media ${device.mobileS} { 
    font-size: 27px;
  }
  @media ${device.mobileL} { 
    font-size: 34px;
  }
  @media ${device.tablet} { 
    font-size: 48px;
  }
  @media ${device.laptop} { 
    font-size: 52px;
  }
  @media ${device.laptopL} { 
    font-size: 70px;
  }
  @media ${device.desktop} { 
    font-size: 112px;
  }
`;

export const Design = styled.p `
  font-family: 'Quicksand', sans-serif;
  color: ${WHITE};
  text-align: center;
  font-size: x-large;
  @media ${device.mobileS} { 
    font-size: 19px;
    margin-top: 40px;
  }
  @media ${device.mobileM} { 
    font-size: large;
  }
  @media ${device.mobileL} {
    font-size: 20px;
  }
  @media ${device.mobileL} {
    font-size: 22px;
  }
  @media ${device.laptop} {
    font-size: 26px;
  }
  @media ${device.laptopL} {
    font-size: 30px;
  }
  @media ${device.desktop} {
    font-size: 46px;
  }
`;

export const Data = styled.div `
  position: absolute;
  @media ${device.mobileS} { 
    top: 163px;
  }
  @media ${device.mobileM} { 
    top: 184px;
  }
  @media ${device.mobileL} { 
    top: 200px;
  }
  @media ${device.tablet} { 
    top: 175px;
  }
  @media ${device.laptop} { 
    top: 190px;
  }
  @media ${device.laptopL} { 
    top: 220px;
  }
  @media ${device.desktop} { 
    top: 200px;
  }
`;