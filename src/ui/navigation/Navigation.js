import React, { useState, useEffect } from "react"
import {NavLink, useHistory} from "react-router-dom"
import styled from "styled-components"
import socials from "./../../data/socials"
import SocialButton from "./SocialButton"
import { useMediaQuery } from "react-responsive"

function Navigation() {
    const history = useHistory()
    const [drawerOpened, setDrawerOpened] = useState(false)

    const isMobile = useMediaQuery({
        query: "(max-width: 768px)",
    })

    const [isOnTop, setOnTop] = useState(true)

    useEffect(() => {
        if (!isMobile) {
            document.addEventListener("scroll", (e) => {
                const scrollTop = window.scrollY
                setOnTop(scrollTop === 0)
            })
        }
    }, [isMobile])

    const onLinkClickListener = (path) => {
        setDrawerOpened(false)
        history.replace(path)
    }

    return (
        <Styles isOnTop={isOnTop} drawerOpened={drawerOpened}>
            <div
                className="mobile-scrim"
                onClick={() => setDrawerOpened(false)}
            />

            <div className="container">
                <div
                    className={`hamburger-button ${
                        drawerOpened ? "opened" : "closed"
                    }`}
                    onClick={() => setDrawerOpened(!drawerOpened)}
                >
                    <div />
                    <div />
                    <div />
                </div>

                <div className="socials-container">
                    {socials.map((social, i) => (
                        <SocialButton key={i} {...social} />
                    ))}
                </div>
                <nav>
                    <ul className="links-container">
                        <li>
                            <MyNavLink
                                onClick={(e) => {
                                    e.preventDefault()
                                    onLinkClickListener("/")
                                }}
                                role={"button"}
                            >
                                Accueil
                            </MyNavLink>
                        </li>

                        <li>
                            <MyNavLink
                                onClick={(e) => {
                                    e.preventDefault()
                                    onLinkClickListener("/apps")
                                }}
                                role={"button"}
                            >
                                Applications
                            </MyNavLink>
                        </li>

                        <li>
                            <MyNavLink
                                onClick={(e) => {
                                    e.preventDefault()
                                    onLinkClickListener("/contact")
                                }}
                                role={"button"}
                            >
                                Contact
                            </MyNavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </Styles>
    )
}

const Styles = styled.header`
  transition: all 0.25s ease;
  z-index: 5;
  position: fixed;
  background-color: ${({ isOnTop }) =>
          isOnTop ? "rgba(0, 0, 0, 0)" : "#161b26"};
  box-shadow: ${({ isOnTop }) => (isOnTop ? "none" : "0px 0px 10px black")};
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
    top: 15px;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
    align-items: center;
    padding: 15px;
    border-radius: 10px;

    div {
      transition: all 0.5s ease;
      height: 3px;
      width: 30px;
    }
  }

  .hamburger-button.opened {
    right: 15px;
    transform: translateX(0%);
    background-color: white;

    div {
      background-color: #20293f;
    }

    div:nth-child(1) {
      transform: rotate(-45deg) translateX(-5px);
      height: 6px;
    }

    div:nth-child(2) {
      transform: rotate(-45deg) translateX(-5px);
      opacity: 0;
    }

    div:nth-child(3) {
      transform: rotate(45deg) translateX(-5px);
      height: 6px;
    }
  }

  .hamburger-button.closed {
    right: -15px;
    transform: translateX(100%);
    background-color: #161b26;

    div {
      background-color: white;
    }

    div:nth-child(1) {
      transform: rotate(0deg) translateX(0px);
      height: 3px;
    }

    div:nth-child(2) {
      transform: rotate(0deg) translateX(0px);
      opacity: 1;
    }

    div:nth-child(3) {
      transform: rotate(0deg) translateX(0px);
      height: 3px;
    }
  }

  .container {
    position: relative;
    display: flex;
    justify-content: space-between;
    height: 80px;
    width: 100vw;
  }

  nav {
    width: 50%;
    height: 100%;
  }

  .links-container {
    font-family: Arial, Helvetica, sans-serif;
    position: relative;
    font-size: 1.3em;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    list-style-type: none;
  }

  .socials-container {
    margin-left: 40px;
    display: flex;
    gap: 40px;
    align-items: center;
  }

  @media (max-width: 768px) {
    .container {
      gap: 30px;
      position: fixed;
      height: 100vh;
      max-height: 100vh;
      min-width: 200px;
      width: 60%;
      max-width: 300px;
      background-color: white;
      transition: all 0.5s ease;
      flex-direction: column-reverse;
      justify-content: space-between;
      align-items: center;
      transform: ${(props) =>
              `translateX(${props.drawerOpened ? "0%" : "-101%"})`};
    }

    .links-container {
      font-size: 1.6em;
      position: relative;
      flex-direction: column;
      justify-content: space-between;
      margin-top: 70px;
      width: 100%;
      height: fit-content;
      gap: 7vh;
      margin-left: 0;
    }

    .socials-container {
      margin: 0;
      margin-left: 10%;
      flex-direction: column;
      align-self: flex-start;
      align-items: flex-start;
      margin-bottom: 30px;
      gap: 5vh;
    }

    .hamburger-button {
      display: flex;
    }

    .mobile-scrim {
      display: ${(props) => (props.drawerOpened ? "block" : "none")};
    }
  }

  .active-link {
    opacity: 1;
  }

  .active-link::after {
    width: 100%;
  }
`

const MyNavLink = styled.a`
  position: relative;
  text-decoration: none;
  user-select: none;
  color: white;
  opacity: 0.5;
  transition: all 0.5s ease;
  cursor: pointer;
  
  &::after {
    border-radius: 5px;
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    content: "";
    width: 0px;
    height: 1px;
    transition: all 0.5s ease;
    background-color: white;
  }

  @media (max-width: 768px) {
    color: #20293f;
    &::after {
      background-color: #20293f;
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
