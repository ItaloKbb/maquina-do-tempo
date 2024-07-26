// src/components/Notas.js
import React from 'react';
import styled from 'styled-components';

const NotasContainer = styled.div`
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

const NoteArea = styled.textarea`
  width: 100%;
  height: 200px;
  background-color: #1c1c1c;
  border: 2px solid #d4af37;
  border-radius: 5px;
  color: #d4af37;
  font-family: 'Courier New', Courier, monospace;
  padding: 0.5rem;
  resize: none;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
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

const Notas = () => (
  <NotasContainer>
    <Header>Bloco de Notas</Header>
    <NoteArea placeholder="Escreva suas notas aqui..." />
    <GearsContainer>
      <Gear src="/gear1.png" alt="gear1" />
      <Gear src="/gear2.png" alt="gear2" />
    </GearsContainer>
  </NotasContainer>
);

export default Notas;