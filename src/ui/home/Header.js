import React from "react"
import styled from "styled-components"

function Header({ title }) {
    return (
        <Container>
            <h1 className="title">{title}</h1>
            <div className="line" />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

    font-size: 20px;

    .title {
        font-weight: lighter;
        align-self: flex-end;
        margin-right: 0.2em;
        margin-left: 0.5em;
    }

    .line {
        border-radius: 0px 999px 999px 0px;
        background-color: white;
        height: 3px;
        width: auto;
    }
`

export default Header
