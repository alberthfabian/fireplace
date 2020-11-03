import styled from 'styled-components';
import { device } from '../Styled';

export const SocialNetwork = styled.img `
  margin-right: 10px;
  &:hover {
    height: 28px;
  }
  @media ${device.mobileS} {
    height: 25px;
  }
`