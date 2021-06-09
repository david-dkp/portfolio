import React from "react"
import styled from "styled-components"
import LabelWithTags from "../common/LabelWithTags"

function AppProject({ app }) {
    return (
        <Container>
            <img className="app-image" src={app.image} />
            <div className="info-container">
                <LabelWithTags label={app.appName} tags={app.tags} />
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    border-radius: 30px;
    flex-direction: column;
    background-color: white;

    .app-image
`

export default AppProject
