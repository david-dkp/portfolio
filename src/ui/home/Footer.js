import React from 'react'
import styled from "styled-components"


function Footer() {


    return (
        <Container>
            <span>Copyright © 2021 - </span>David Dekeuwer
        </Container>
    )
}

const Container = styled.div`
    background-color: #1F283D;
    color: white;
    font-size: 22px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    padding: 3em 2em;

    span {
        color: grey;
    }

`

export default Footer;