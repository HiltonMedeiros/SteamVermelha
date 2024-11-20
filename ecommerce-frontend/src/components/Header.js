import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GameContext } from '../context/GameContext';

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
  display: flex;
  align-items: center;

  a {
    color: #fff;
    margin-left: 20px;
    text-decoration: none;
  }
`;

const SearchInput = styled.input`
  padding: 5px 10px;
  border-radius: 15px;
  border: none;
  outline: none;
  font-size: 1em;
`;

const UserName = styled.span`
  color: #fff;
  margin-left: 20px;
`;

const LogoutButton = styled.button`
  background-color: #ff4d4d;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 20px;

  &:hover {
    background-color: #ff1a1a;
  }
`;

const Header = () => {
  const [inputValue, setInputValue] = useState('');
  const { setSearchTerm } = useContext(GameContext);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedUserName = localStorage.getItem('username');
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setSearchTerm(value);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    window.location.href = '/';
  };

  return (
    <HeaderContainer>
      <Logo>Dark Steam</Logo>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/admin">Admin</Link>
        <SearchInput
          type="text"
          placeholder="Buscar jogos..."
          value={inputValue}
          onChange={handleInputChange}
        />
        {userName && <UserName>Bem-vindo, {userName}!</UserName>}
        {userName && <LogoutButton onClick={handleLogout}>Logout</LogoutButton>}
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;