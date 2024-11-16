import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: #1e1e1e;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  color: #fff;
  font-size: 1.5em;
`;

const NavLinks = styled.nav`
  a {
    color: #fff;
    margin-left: 20px;
    text-decoration: none;
  }
`;

const Header = () => (
  <HeaderContainer>
    <Logo>SteamVermelha</Logo>
    <NavLinks>
      <Link to="/">Home</Link>
      {/* Adicione mais links se necessário */}
    </NavLinks>
  </HeaderContainer>
);

export default Header;