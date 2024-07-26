// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #282c34;
  padding: 0.5rem 2rem; /* Ajuste de padding */
  text-align: center;
  color: #d4af37;
  position: fixed;
  width: 100%;
  bottom: 0;
  border-top: 2px solid #6b6b47;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.5);
  font-family: 'Courier New', Courier, monospace;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Garantir que o footer fique acima */
`;

const GearsContainer = styled.div`
  position: relative;
  height: 40px; /* Altura ajustada das engrenagens */
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

const Gear = styled.img`
  width: 40px; /* Tamanho ajustado das engrenagens */
  height: 40px;
  opacity: 0.8;
  animation: rotate infinite 20s linear;

  &:nth-child(1) {
    animation-duration: 30s;
  }

  &:nth-child(2) {
    animation-duration: 45s;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const FooterText = styled.p`
  margin: 0;
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

const Footer = () => (
  <FooterContainer>
    <GearsContainer>
      <Gear src="/gear1.png" alt="gear1" />
      <Gear src="/gear2.png" alt="gear2" />
    </GearsContainer>
    <FooterText>© 2024 Time Machine Inc.</FooterText>
  </FooterContainer>
);

export default Footer;
