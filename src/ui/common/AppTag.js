import React from "react"
import styled from "styled-components"

function AppTag({ tag }) {
    return <Container backgroundColor={tag.color}>{tag.label}</Container>
}

const Container = styled.div`
    justify-content: center;
    align-items: center;
    color: white;
    background-color: ${(props) => props.backgroundColor};
    display: inline-block;
    border-radius: 999px;
    padding: 0.15em 0.9em 0.15em 0.9em;
    white-space: nowrap;
`

export default AppTag
