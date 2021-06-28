import React from "react"
import styled from "styled-components"

function Header({ title }) {
    return (
        <Container>
            <h2 className="title">{title}</h2>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

    .title {
        text-align: center;
        font-weight: lighter;
        font-size: 4rem;
        margin: 0em 1em;
    }

    @media (max-width: 768px) {
        .title {
            font-size: 3.6rem;
        }
    }
`

export default Header
