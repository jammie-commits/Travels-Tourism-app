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
                            <VscChromeclose onclick={() => setVavbarState(false)} />
                        ) : (
                            <GiHamburgerMenu onclick={() => setVavbarState(true)} />

                        )}
                        
                    </ToggleIcon>
                    </Brand>
                <NavLinks>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#aboutus">About Us</a></li>
                    <li><a href="#destinations">Destinations</a></li>
                    <li><a href="#reviews">Reviews</a></li>
                    <li><a href="#footer">Contact Us</a></li>
                </NavLinks>

                
            </StyledNav>

           