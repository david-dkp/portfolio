import React from "react"
import styled from "styled-components"
import Header from "./Header"
import AppProject from "./AppProject"
import apps from "../../data/apps"

function RecentProjects() {
    return (
        <Container>
            <Header title="Mes projets récents" />
            <AppProject app={apps[2]} />
        </Container>
    )
}

const Container = styled.div`
    align-items: center;
    position: relative;
    display: flex;
    flex-direction: column;
`

export default RecentProjects
