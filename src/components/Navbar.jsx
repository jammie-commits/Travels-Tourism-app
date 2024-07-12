import React, { useState } from "react";
import styled from 'styled-components';
import logo from '../assets/logo.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import  LoginForm from './LoginForm';
import  SignupForm  from './SignupForm';

export default function Navbar() {
    const [navbarState, setNavbarState] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showSignupForm, setShowSignupForm] = useState(false);

    const closeForms = () => {
        setShowLoginForm(false);
        setShowSignupForm(false);
    };

    return (
        <>
            <StyledNav>
                <Brand>
                    <LogoContainer>
                        <img src={logo} alt='Logo' />
                        Tourism & Travel
                    </LogoContainer>
                    <ToggleIcon>
                        {navbarState ? (
                            <VscChromeClose onClick={() => setNavbarState(false)} />
                        ) : (
                            <GiHamburgerMenu onClick={() => setNavbarState(true)} />
                        )}
                    </ToggleIcon>
                </Brand>
                <NavLinks>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#aboutus'>AboutUs</a></li>
                    <li><a href='#destinations'>Destinations</a></li>
                    <li><a href='#reviews'>Reviews</a></li>
                    <li><a href='#footer'>ContactUs</a></li>
                </NavLinks>
                <ButtonGroup>
                    <LoginButton onClick={() => setShowLoginForm(true)}>Login</LoginButton>
                    <SignupButton onClick={() => setShowSignupForm(true)}>Signup</SignupButton>
                </ButtonGroup>
            </StyledNav>
            <MobileNav state={navbarState}>
                <ul>
                    <li><a href='#home' onClick={() => setNavbarState(false)}>Home</a></li>
                    <li><a href='#aboutus' onClick={() => setNavbarState(false)}>AboutUs</a></li>
                    <li><a href='#destinations' onClick={() => setNavbarState(false)}>Destinations</a></li>
                    <li><a href='#reviews' onClick={() => setNavbarState(false)}>Reviews</a></li>
                    <li><a href='#footer' onClick={() => setNavbarState(false)}>ContactUs</a></li>
                </ul>
            </MobileNav>
            {showLoginForm && <LoginForm closeForm={closeForms} />}
            {showSignupForm && <SignupForm closeForm={closeForms} />}
        </>
    );
}



const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;

const LogoContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  font-size: 1.2rem;
  font-weight: 900;
  text-transform: uppercase;
`;

const ToggleIcon = styled.div`
  display: none;

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    display: block;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 1rem;
  list-style-type: none;

  li {
    a {
      text-decoration: none;
      color: #0077b6;
      font-size: 1.2rem;
      transition: 0.1s ease-in-out;

      &:hover {
        color: #023e8a;
      }
    }

    &:first-of-type a {
      color: #023e8a;
      font-weight: 900;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    display: none;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    display: none;
  }
`;

const LoginButton = styled.button`
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 1rem;
  border: none;
  color: white;
  background-color: #48cae4;
  font-size: 1.1rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #023e8a;
  }
`;

const SignupButton = styled.button`
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 1rem;
  border: none;
  color: white;
  background-color: #48cae4;
  font-size: 1.1rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #023e8a;
  }
`;

const MobileNav = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  top: ${({ state }) => (state ? "50px" : "-400px")};
  background-color: white;
  height: 30vh;
  width: 100%;
  align-items: center;
  transition: 0.3s ease-in-out;

  ul {
    list-style-type: none;
    width: 100%;

    li {
      width: 100%;
      margin: 1rem 0;
      margin-left: 2rem;

      a {
        text-decoration: none;
        color: #0077b6;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;

        &:hover {
          color: #023e8a;
        }
      }

      &:first-of-type a {
        color: #023e8a;
        font-weight: 900;
      }
    }
  }
`;
