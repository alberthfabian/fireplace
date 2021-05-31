import React from 'react';
// import Menu from '../Menu';
import logo from '../../assets/Icons/Logo.png';
// import Navbar from '../Navbar';
import Social from '../Social';
import { useServer } from '../../context';
import { Logo, Head, StyledLink, Div, ContainerLogo, ContainerSocial, ContainerLogin } from './Styled.jsx';
import Login from '../Register/Login';
import Logout from '../Register/Logout';
import Profile from '../../components/Register/Profile';

const Header = () => {

  const { DataSocial } = useServer();

  return (
    <Head>
      <ContainerSocial>
        <Div>
          {DataSocial.map(social => (
            <Social key={social.id} name={social.name} url={social.url}/>
          ))}
        </Div>
      </ContainerSocial>
      <ContainerLogo>
        <article>
          <StyledLink to='/'>
            <Logo src={ logo } alt='Logo' />
            <h1>Papelería Golden</h1>
          </StyledLink>
        </article>
      </ContainerLogo>
      <ContainerLogin>
        <div>
          <Profile />
          <div>
            <Login />
            <Logout />
          </div>
        </div>
      </ContainerLogin>
      {/* <Menu/>
      <Navbar/> */}
    </Head>
  );
};

export default Header;