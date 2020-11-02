import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Container } from './Styled'

const Layout = ({ children }) => (
  <Container>
    <Header />
    {children}
    <Footer />
  </Container>
);

export default Layout;