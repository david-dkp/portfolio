import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


function ContactMe() {


    return (
        <Container>
            <p>Vous avez une application à développer ?</p>
            <ContactMeButton to="/contact" >Contactez-moi</ContactMeButton>
        </Container>
    )
}

export default ContactMe

const Container = styled.div`
    padding: 100px 0px;
    display: flex;
    flex-direction: column;
    gap: 70px;
    font-size: 20px;
    align-items: center;
    color: white;

    p {
        width: 90vw;
        max-width: 800px;
        font-size: 2.5em;
    }

    @media (max-width: 768px) {
        p {
            font-size: 2.2em;
        }
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