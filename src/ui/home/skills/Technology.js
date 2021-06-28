import React from "react"
import styled from "styled-components"
import interpolate from "color-interpolate"

function Technology({ technology }) {
    const levelColorMap = interpolate(["#FF7A00", "#09E511"])

    const levelColor = levelColorMap(technology.level)

    return <Container backgroundColor={levelColor}>{technology.name}</Container>
}

const Container = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    background-color: ${({ backgroundColor }) => backgroundColor};
    border-radius: 10px;
    text-align: center;
    font-size: 1.5em;
    padding: 0.3em 0.9em;
`

export default Technology
