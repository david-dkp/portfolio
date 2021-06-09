import React from "react"
import styled from "styled-components"
import Header from "./Header"

function RecentProjects() {
    return (
        <Container>
            <Header title="Mes projets récents" />
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
