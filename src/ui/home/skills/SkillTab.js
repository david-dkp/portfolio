import React from "react"
import styled from "styled-components"

function SkillTab({ skill: { name, logo }, selected, onClick }) {
    return (
        <Container onClick={onClick} selected={selected} logoColor={logo.color}>
            {logo.svg()}
            <h4>{name}</h4>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 25px;
    transition: all 0.25s ease;
    background-color: ${({ selected }) => (selected ? "white" : "#B7B7B7")};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

    h4 {
        font-weight: 400;
    }

    svg {
        width: 2.3em;
        height: 2.3em;
        fill: ${({ logoColor }) => logoColor};
    }
`

export default SkillTab
