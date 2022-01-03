import React from "react"
import styled from "styled-components"

function SoftSkill({softSkill: {title, description, logo}, ...props}) {
    return (
        <Container {...props}>
            {logo()}
            <h3 className="title">{title}</h3>
            <p className="description">{description}</p>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 270px;
    height: 300px;
    background-color: #161b26;
    color: white;
    fill: white;
    font-size: 20px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    padding-left: 25px;
    padding-right: 25px;
    border-radius: 20px;

    svg {
        width: 4em;
        height: 4em;
    }

    .title {
        font-weight: normal;
        margin-top: 20px;
        font-size: 1.5em;
    }

    .description {
        margin-top: 5px;
        font-weight: lighter;
        font-size: 1em;
    }
`

export default SoftSkill
