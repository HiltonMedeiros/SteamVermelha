import React, { useState, useContext } from 'react';
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

const Header = () => {
  const [inputValue, setInputValue] = useState('');
  const { setSearchTerm } = useContext(GameContext);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setSearchTerm(value);
  };

  return (
    <HeaderContainer>
      <Logo>Dark Steam</Logo>
      <NavLinks>
        <Link to="/">Home</Link>
      </NavLinks>
      <SearchInput
        type="text"
        placeholder="Buscar jogos..."
        value={inputValue}
        onChange={handleInputChange}
      />
    </HeaderContainer>
  );
};

export default Header;