import React, { useEffect, useState } from "react"
import styled from "styled-components"

function SocialButton({ svgComponent, color, socialName, url }) {
    const [socialWidth, setSocialWidth] = useState()

    useEffect(() => {
        const nameElement = document.getElementById(socialName)
        const width = nameElement.clientWidth
        setSocialWidth(width)
    }, [socialWidth, socialName])

    return (
        <Container
            socialWidth={socialWidth}
            color={color}
            href={url}
            target="_blank"
        >
            {svgComponent()}
            <div className="social-name-container">
                <h1 id={socialName}>{socialName}</h1>
            </div>
        </Container>
    )
}

const Container = styled.a`
    text-decoration: none;
    color: black;
    transition: all 0.5s ease;
    padding: 5px;
    display: flex;
    background-color: rgba(255, 255, 255, 0);
    border-radius: 7px;
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;

    .social-name-container {
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        justify-content: start;
        align-items: center;
        transition: all 0.5s ease;
        width: 0;
        overflow: hidden;
    }

    svg {
        height: 30px;
        width: 30px;
        fill: white;
        transition: all 0.5s ease;
    }

    h1 {
        user-select: none;
        font-size: 1.4em;
    }

    @media (max-width: 768px) {
        background-color: white;
        border: 2px solid #20293f;
        padding: 7px;

        &:active {
            transition: all 0.25s ease;
            background-color: gray;
        }

        svg {
            fill: ${(props) => {
                return props.color
            }};
        }

        .social-name-container {
            width: ${(props) => props.socialWidth + "px"};
            margin-left: 5px;
            margin-right: 5px;
        }
    }

    @media (min-width: 768px) {
        &:hover {
            transition: all 0.5s ease;
            background-color: rgba(255, 255, 255, 1);

            &:active {
                transition: all 0.25s ease;
                background-color: rgba(255, 255, 255, 0.6);
            }

            svg {
                transition: all 0.5s ease;
                fill: ${(props) => {
                    return props.color
                }};
            }

            .social-name-container {
                transition: all 0.5s ease;
                width: ${(props) => props.socialWidth + "px"};
                overflow: visible;
                margin-left: 5px;
                margin-right: 5px;
            }
        }
    }
`

export default SocialButton
