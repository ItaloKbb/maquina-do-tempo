// src/components/CarouselComponent.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';

const StyledCarouselContainer = styled.div`
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

const StyledCarousel = styled(Carousel)`
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

const CarouselComponent = () => (
  <StyledCarouselContainer>
    <Header>Carousel</Header>
    <StyledCarousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/300x200"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/300x200"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/300x200"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </StyledCarousel>
    <GearsContainer>
      <Gear src="/gear1.png" alt="gear1" />
      <Gear src="/gear2.png" alt="gear2" />
    </GearsContainer>
  </StyledCarouselContainer>
);

export default CarouselComponent;
