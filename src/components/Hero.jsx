import React from 'react';
import styled from "styled-components";
import homeImage from "../assets/hero.png";

export default function Hero() {
    return (
        <HeroSection id="hero">
            <Background>
                <img src={homeImage} alt="Background" />
            </Background>
            <Content>
                <Title>
                    <h1>EXPLORE THE WORLD</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                        natus, enim ipsam magnam odit deserunt itaque? Minima earum velit
                        tenetur!
                    </p>
                </Title>
                <Search>
                    <Container>
                        <label htmlFor="destination">Enter Destination</label>
                        <input type="text" id="destination" placeholder="Search Your location" />
                    </Container>
                    <Container>
                        <label htmlFor="start-date">Start-date</label>
                        <input type="date" id="start-date" />
                    </Container>
                    <Container>
                        <label htmlFor="end-date">End-date</label>
                        <input type="date" id="end-date" />
                    </Container>
                    <button>Book Trip</button>
                </Search>
            </Content>
        </HeroSection>
    );
}

const HeroSection = styled.section`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 100%;
`;

const Background = styled.div`
  height: 100%;
  img {
    width: 100%;
    filter: brightness(60%);
  }
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 3;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Title = styled.div`
  color: white;
  h1 {
    font-size: 3rem;
    letter-spacing: 0.2rem;
  }
  p {
    text-align: center;
    padding: 0 30vw;
    margin-top: 0.5rem;
    font-size: 1.2rem;
  }
`;

const Search = styled.div`
  display: flex;
  background-color: #ffffffce;
  padding: 0.5rem;
  border-radius: 0.5rem;

  @media screen and (min-width: 280px) and (max-width: 980px) {
    flex-direction: column;
    padding: 0.8rem;
    gap: 0.8rem;
  }

  button {
    padding: 1rem;
    cursor: pointer;
    border-radius: 0.3rem;
    border: none;
    color: white;
    background-color: #4361ee;
    font-size: 1.1rem;
    text-transform: uppercase;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: #023e8a;
    }

    @media screen and (min-width: 280px) and (max-width: 980px) {
      padding: 1rem;
      font-size: 1rem;
    }
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 1.5rem;

  label {
    font-size: 1.1rem;
    color: #03045e;
  }

  input {
    background-color: transparent;
    border: none;
    text-align: center;
    color: black;

    &[type="date"] {
      padding-left: 3rem;
    }

    &::placeholder {
      color: black;
    }

    &:focus {
      outline: none;
    }

    @media screen and (min-width: 280px) and (max-width: 980px) {
      padding-left: 1rem;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 980px) {
    padding: 0 0.8rem;
  }
`;

export { HeroSection, Background, Content, Title, Search, Container };
