import React from "react"
import {NavLink} from "react-router-dom"
import styled from "styled-components"
import socials from "./../../data/socials"
import SocialButton from "./SocialButton"

function Navigation() {
    return (
       <Styles>
           <div className="container">
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

    position: sticky;
    top: 0;
    background-color: #20293F;

    .container {
        position: relative;
        display: flex;
        height: 80px;
        width: 100vw;

        @media (max-width: 550px) {
            display: none;
        }
    }

    .socials-container {
        margin-left: 40px;
        display: flex;
        gap: 40px;
        justify-content: space-around;
        align-items: center;

        @media (max-width: 725px) {
           gap: 20px;
           margin-left: 20px;
        }
    }

    .links-container {
        position: relative;
        font-size: 1.3em;
        color: white;
        display: flex;
        margin-left: auto;
        align-items: center;
        justify-content: space-evenly;
        width: 50%;
        height: 100%;

        @media (max-width: 725px) {
            width: 75%;
        }
    }

    .active-link {
        opacity: 1;
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

    &:hover {
        opacity: 1;
    }

    &:hover::after {
            width: 100%;
        }
`




export default Navigation