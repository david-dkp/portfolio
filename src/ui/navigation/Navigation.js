import React from "react"
import {NavLink} from "react-router-dom"
import styled from "styled-components"

function Navigation() {
    return (
       <Styles>
           <div className="container">
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
        height: 80px;
        width: 100vw;

        @media (max-width: 425px) {
            display: none;
        }
    }

    .links-container {
        font-size: 1.3em;
        color: white;
        margin-left: auto;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        height: 100%;
        width: 50%;

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