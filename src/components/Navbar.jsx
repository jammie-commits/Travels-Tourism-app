import React, {useState} from 'react';
import styled from "styled-components";
import logo from "../assets/logo.png";
import {FaBars, FaTimes} from "react-icons/fa";
import {VscChromeClose} from "react-icons/vsc";

export default function Navbar() {
    const [navbarState, setVavbarState] = useState(false);

    return (
        <>
            <StyledNav>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <ul className={navbarState ? "nav-menu active" : "nav-menu"}>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#aboutus">About Us</a>
                    </li>
                    <li>
                        <a href="#destinations">Destinations</a>
                    </li>
                    <li>
                        <a href="#reviews">Reviews</a>
                    </li>
                    <li>
                        <a href="#contactus">Contact Us</a>
                    </li>
                </ul>
                <button className="nav-btn nav-close-btn" onClick={() => setVavbarState(false)}>
                    <VscChromeClose />
                </button>
                <button className="nav-btn" onClick={() => setVavbarState(true)}>
                    <FaBars />
                </button>
            </StyledNav>

            <StyledSidebar className={navbarState ? "nav-menu active" : "nav-menu"}>
                <button className="nav-btn nav-close-btn" onClick={() => setVavbarState(false)}>
                    <VscChromeClose />
                </button>
                <ul className="nav-menu-items">
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#aboutus">About Us</a>
                    </li>
                    <li>
                        <a href="#destinations">Destinations</a>
                    </li>
                    <li>
                        <a href="#reviews">Reviews</a>
                    </li>
                    <li>
                        <a href="#contactus">Contact Us</a>
                    </li>
                </ul>
            </StyledSidebar>
        </>
    )
}