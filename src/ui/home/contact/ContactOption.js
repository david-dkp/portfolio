import React from "react"
import styled from "styled-components"

function ContactOption({title, logo, text, ...other}) {
    return (
        <Container {...other}>
            <p className="title">{title}</p>
            {logo()}
            <p className="text">{text}</p>
        </Container>
    )
}

const Container = styled.a`
    position: relative;
    text-decoration: none;
    color: white;
    fill: white;
    width: 200px;
    height: 200px;
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    font-size: 14px;
    overflow: hidden;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    transition: all 0.25s ease;
    z-index: 1;

    &::after {
        content: "";
        background-color: white;
        border-radius: 999px;
        transition: all 0.25s linear;
        position: absolute;
        left: -50%;
        bottom: -50%;
        width: 0%;
        height: 0%;
        z-index: -1;
    }

    &:hover {
        color: black;
        fill: black;

        &::after {
            width: 300%;
            height: 300%;
        }
    }

    .title {
        font-size: 2em;
        font-weight: lighter;
    }

    svg {
        height: 4em;
        width: 4em;
    }

    .text {
        font-size: 1.5em;
    }
`

export default ContactOption
