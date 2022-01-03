import React from "react"
import styled from "styled-components"

function SkillSection({title, contentText}) {
    return (
        <Container>
            <h6 className="section-title">{title}</h6>
            <p className="section-content-text">{contentText}</p>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 400px;

    h6,
    p {
        text-align: center;
    }

    h6 {
        font-size: 1.3em;
    }

    p {
        font-size: 1.4em;
        margin-top: 5px;
    }
`

export default SkillSection
