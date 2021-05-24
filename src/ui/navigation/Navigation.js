import React, {useState} from "react"
import {NavLink} from "react-router-dom"
import styled from "styled-components"
import socials from "./../../data/socials"
import SocialButton from "./SocialButton"

function Navigation() {

    const [drawerOpened, setDrawerOpened] = useState(false)

    return (
       <Styles drawerOpened={drawerOpened}>
            <div className="mobile-scrim" onClick={() => setDrawerOpened(false)} />

            <div className="container">
                <div className="hamburger-button" onClick={() => setDrawerOpened(!drawerOpened)}>
                    <div/>
                    <div/>
                    <div/>
                </div>

                <div className="socials-container">
                    {socials.map((social, i) => <SocialButton key={i} {...social} />)}
                </div>

                <div className="links-container">
                   <MyNavLink activeClassName="active-link" exact to="/">Accueil</MyNavLink>
                   <MyNavLink activeClassName="active-link" exact to="/apps">Applications</MyNavLink>
                   <MyNavLink activeClassName="active-link" exact to="/contact">Contact</MyNavLink>
                </div>
            </div>

       </Styles>
    )
}

const Styles = styled.div`
    z-index: 1;
    position: fixed;
    top: 0;

    .mobile-scrim {
        transition: all 0.5s ease;
        width: 100%;
        height: 100vh;
        display: none;
        position: fixed;
    }

    .hamburger-button {
        display: none;
        position: absolute;
        transition: all 0.5s ease;
        right: ${props => props.drawerOpened ? 20 : -20}px;
        transform: ${props => `translateX(${props.drawerOpened ? "0%" : "100%"})`};
        top: 20px;
        flex-direction: column;
        justify-content: space-between;
        gap: 8px;
        align-items: center;

        div {
            transition: all 0.5s ease;
            background-color:${props => props.drawerOpened ? "#20293F" : "white"};
            height: 3px;
            width: 30px;
        }
        
        div:nth-child(1) {
            transform: rotate(${props => props.drawerOpened ? -45 : 0}deg) translateX(${props => props.drawerOpened ? -5 : 0}px);
            height: ${props => props.drawerOpened ? 6 : 3}px;
        }

        div:nth-child(2) {
            transform: rotate(${props => props.drawerOpened ? -45 : 0}deg) translateX(${props => props.drawerOpened ? -5 : 0}px);
            opacity: ${props => props.drawerOpened ? 0 : 1}
        }

        div:nth-child(3) {
            transform: rotate(${props => props.drawerOpened ? 45 : 0}deg) translateX(${props => props.drawerOpened ? -5 : 0}px);
            height: ${props => props.drawerOpened ? 6 : 3}px;
        }
    }

    .container {
        position: relative;
        display: flex;
        height: 80px;
        width: 100vw;
    }

    .links-container {
        font-family: Arial, Helvetica, sans-serif;
        position: relative;
        font-size: 1.3em;
        color: white;
        display: flex;
        margin-left: auto;
        align-items: center;
        justify-content: space-evenly;
        width: 50%;
        height: 100%;
    }

    .socials-container {
        margin-left: 40px;
        display: flex;
        gap: 40px;
        justify-content: space-around;
        align-items: center;
    }

    @media (max-width: 768px) {

        .container {
            position: fixed;
            height: 100vh;
            min-width: 200px;
            width: 60%;
            max-width: 300px;
            background-color: white;
            transition: all 0.5s ease;
            flex-direction: column-reverse;
            justify-content: space-between;
            align-items: center;
            transform: ${props => `translateX(${props.drawerOpened ? "0%" : "-101%"})`};
        }

        .links-container {
            font-size: 1.6em;
            position: relative; 
            flex-direction: column;
            justify-content: space-between;
            margin-top: 70px;
            width: 100%;
            height: fit-content;
            gap: 50px;
            margin-left: 0;
        }

        .socials-container {
            margin: 0;
            margin-left: 10%;
            flex-direction: column;
            align-self: flex-start;
            align-items: flex-start;
            margin-bottom: 30px;
        }

        .hamburger-button {
            display: flex;
        }

        .mobile-scrim {
            display: ${props => props.drawerOpened ? "block" : "none"};
        }

    }

    .active-link {
        opacity: 1;
        &::after {
            width: 100%auto;
        }
    }

    .active-link::after{
        width: 100%;
    }
`

const MyNavLink = styled(NavLink)`
    position: relative;
    text-decoration: none;
    user-select: none;

    color: white;
    opacity: 0.5;
    transition: all 0.5s ease;

    &::after {
        border-radius: 5px;
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
        content: '';
        width: 0px;
        height: 1px;
        transition: all 0.5s ease;
        background-color: white;
    }

    @media (max-width: 768px) {
        color: #20293F;
        &::after {
            background-color: #20293F;
        }
    }

    &:hover {
        opacity: 1;
    }

    &:hover::after {
            width: 100%;
    }
`




export default Navigation