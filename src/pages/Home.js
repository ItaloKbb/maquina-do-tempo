// src/pages/Home.js
import React from 'react';
import styled from 'styled-components';
import TimeTravelControl from '../components/TimeTravelControl';
import CarouselComponent from '../components/CarouselComponent';
import Notas from '../components/Notas';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  width: 100%;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  width: 50%;
  height: 50%;
  max-width: 1200px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const GridItem = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  box-sizing: border-box;
`;


const NeonText = styled.h2`
  font-size: 3rem;
  color: #fff;
  text-align: center;
  text-shadow: 
    0 0 5px #fff,
    0 0 10px #fff,
    0 0 20px #ff00ff,
    0 0 30px #ff00ff,
    0 0 40px #ff00ff,
    0 0 50px #ff00ff,
    0 0 60px #ff00ff,
    0 0 70px #ff00ff;
  margin-bottom: 2rem;
  position: relative;
  animation: flicker 1.5s infinite alternate;

  @keyframes flicker {
    0%, 18%, 22%, 25%, 53%, 57%, 100% {
      opacity: 1;
      text-shadow: 
        0 0 5px #fff,
        0 0 10px #fff,
        0 0 20px #ff00ff,
        0 0 30px #ff00ff,
        0 0 40px #ff00ff,
        0 0 50px #ff00ff,
        0 0 60px #ff00ff,
        0 0 70px #ff00ff;
    }
    20%, 24%, 55% {
      opacity: 0.8;
      text-shadow: none;
    }
    21%, 23%, 25%, 54%, 56% {
      opacity: 0.5;
      text-shadow: none;
    }
  }
`;

const Home = () => (
  <PageContainer>
    <NeonText>[Gabriella Marreto]</NeonText>
    <GridContainer>
      <GridItem>
        <Notas />
      </GridItem>
      <GridItem>
        <TimeTravelControl />
      </GridItem>
      <GridItem>
        <CarouselComponent />
      </GridItem>
      <GridItem>
        <CarouselComponent />
      </GridItem>
    </GridContainer>
  </PageContainer>
);

export default Home;
