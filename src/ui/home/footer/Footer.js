import React from "react"
import styled from "styled-components"

function Footer() {
    return (
        <Container>
            <span>Copyright © {new Date().getFullYear().toString()} - </span>David Dekeuwer
        </Container>
    )
}

const Container = styled.section`
    background-color: #1f283d;
    color: white;
    font-size: 22px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    line-height: 0;
    padding: 3em 2em;

    span {
        color: grey;
    }
`

export default Footer
