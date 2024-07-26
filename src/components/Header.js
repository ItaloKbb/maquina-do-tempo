// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #282c34;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #d4af37;
  border-bottom: 2px solid #6b6b47;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 1000;
`;

const Title = styled.h1`
  font-family: 'Courier New', Courier, monospace;
  font-size: 2rem;
  color: #d4af37;
  text-shadow: 
    0 0 5px #fff,
    0 0 10px #fff,
    0 0 20px #d4af37,
    0 0 30px #d4af37,
    0 0 40px #d4af37,
    0 0 50px #d4af37,
    0 0 60px #d4af37,
    0 0 70px #d4af37;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;

  a {
    color: #d4af37;
    text-decoration: none;
    font-size: 1.2rem;
    position: relative;
    transition: color 0.3s;

    &:hover {
      color: #ffcc00;
    }

    &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      display: block;
      background: #ffcc00;
      transition: width 0.3s;
      bottom: -5px;
      left: 0;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

const Gear = styled.img`
  position: absolute;
  width: 40px;
  height: 40px;
  opacity: 0.8;

  &:nth-child(1) {
    top: 10px;
    left: 10px;
  }

  &:nth-child(2) {
    top: 10px;
    right: 10px;
  }
`;

const Header = () => (
  <HeaderContainer>
    <Gear src="/gear1.png" alt="gear1" />
    <Title>Time Machine Interface</Title>
    <Gear src="/gear2.png" alt="gear2" />
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/settings">Settings</Link>
    </Nav>
  </HeaderContainer>
);

export default Header;
