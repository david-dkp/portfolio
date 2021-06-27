import React from "react"
import styled from "styled-components"
import Landing from "./landing/Landing"
import Presentation from "./presentation/Presentation"
import RecentProjects from "./recentprojects/RecentProjects"
import Skills from "./skills/Skills"
import ContactMe from "./contactme/ContactMe"
import Footer from "./footer/Footer"
import DownloadCv from "./cv/DownloadCv"

function Home() {
    return (
        <Styles>
            <Landing />
            <Presentation />
            <Skills />
            <RecentProjects />
            <DownloadCv />
            <ContactMe />
            <Footer />
        </Styles>
    )
}

const Styles = styled.div`
    display: flex;
    flex-direction: column;
`

export default Home
