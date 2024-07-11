import React, { useState } from "react";
import styled from 'styled-components';
import logo from '../assets/logo.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";

export default function Navbar() {
    const [navbarState, setVavbarState] = useState(false);

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
                    <LoginButton>Login</LoginButton>
                    <SignupButton>Signup</SignupButton>
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
        </>
    );
}

           