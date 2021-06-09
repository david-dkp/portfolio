import React from "react"
import styled from "styled-components"
import AppTag from "./AppTag"

function LabelWithTags({ label, tags }) {
    return (
        <Container>
            <h2>{label}</h2>
            <div className="tags-container">
                {tags.map((tag, index) => {
                    return <AppTag tag={tag} key={index} />
                })}
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5em;

    h2 {
        font-weight: 400;
        font-size: 1.3em;
        font-family: Arial, Helvetica, sans-serif;
        text-align: start;
    }

    .tags-container {
        display: flex;
        gap: 0.5em;
        font-size: 0.8em;
    }
`

export default LabelWithTags
