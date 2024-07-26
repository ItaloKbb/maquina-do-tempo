// src/components/TimeTravelControl.js
import React from 'react';
import styled from 'styled-components';

const ControlContainer = styled.div`
  background-color: #2c2c2c;
  border: 2px solid #d4af37;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  margin: 1rem;
  max-width: 400px;
  color: #d4af37;
  font-family: 'Courier New', Courier, monospace;
  position: relative;
  width: 100%;
`;

const Header = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  text-align: center;
  text-shadow: 
    0 0 5px #fff,
    0 0 10px #fff,
    0 0 20px #d4af37,
    0 0 30px #d4af37;
`;

const Button = styled.button`
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  color: white;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const GearsContainer = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  display: flex;
  gap: 5px;
`;

const Gear = styled.img`
  width: 20px;
  height: 20px;
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

const TimeTravelControl = () => (
  <ControlContainer>
    <Header>Painel de Controle</Header>
    <Button>Voltar ao passado</Button>
    <Button>Migrar para o futuro</Button>
    <GearsContainer>
      <Gear src="/gear1.png" alt="gear1" />
      <Gear src="/gear2.png" alt="gear2" />
    </GearsContainer>
  </ControlContainer>
);

export default TimeTravelControl;