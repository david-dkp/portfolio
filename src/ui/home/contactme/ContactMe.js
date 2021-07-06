import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

function ContactMe() {
    return (
        <Container>
            <div className="line" />
            <p>Vous avez une application à développer ?</p>
            <ContactMeButton
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-easing="ease"
                data-aos-delay="250"
                data-aos-once="true"
                to="/contact"
            >
                Contactez-moi
            </ContactMeButton>
        </Container>
    )
}

export default ContactMe

const Container = styled.section`
    position: relative;
    padding: 100px 0px;
    display: flex;
    flex-direction: column;
    gap: 70px;
    font-size: 20px;
    align-items: center;
    color: white;

    .line {
        position: absolute;
        top: 0px;
        left: 0px;
        height: 1px;
        width: 100vw;
        background-color: black;
    }

    p {
        width: 90vw;
        max-width: 800px;
        font-size: 2.5em;
    }

    @media (max-width: 768px) {
        font-size: 17px;
    }
`

const ContactMeButton = styled(Link)`
    padding: 0.5em 1em;
    font-size: 1.2em;
    border-radius: 15px;
    border: 1px solid white;
    transition: all 0.5s ease;
    cursor: pointer;
    text-decoration: none;
    color: white;

    &:hover {
        color: black;
        background-color: white;
    }

    &:active {
        background-color: grey;
    }
`
