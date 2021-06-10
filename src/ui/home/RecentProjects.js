import React from "react"
import styled from "styled-components"
import Header from "./Header"
import AppProject from "./AppProject"
import apps from "../../data/apps"

function RecentProjects() {
    return (
        <Container>
            <Header title="Mes projets récents" />

            <div className="projects-container">
                <AppProject app={apps[2]} />
                <AppProject app={apps[3]} />
            </div>
        </Container>
    )
}

const Container = styled.div`
    align-items: center;
    position: relative;
    display: flex;
    flex-direction: column;

    margin-top: 50px;

    .projects-container {
        margin-top: 70px;
        display: flex;
        justify-content: center;
        gap: 70px;
        flex-wrap: wrap;
    }
`

export default RecentProjects
