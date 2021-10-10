import React, { useEffect } from "react"
import styled from "styled-components"
import Landing from "./landing/Landing"
import Presentation from "./presentation/Presentation"
import RecentProjects from "./recentprojects/RecentProjects"
import Skills from "./skills/Skills"
import ContactMe from "./contactme/ContactMe"
import Footer from "./footer/Footer"
import DownloadCv from "./cv/DownloadCv"
import SoftSkills from "./personalities/SoftSkills"
import Testimony from "./testimony/Testimony"

function Home() {
    useEffect(() => {
        document.title =
            "David Dekeuwer, développeur d'applications Android - Mon site Web - Mon portfolio"
    }, [])

    return (
        <Styles>
            <Landing />
            <Presentation />
            <SoftSkills />
            <Skills />
            <RecentProjects />
            <Testimony />
            <DownloadCv />
            <ContactMe />
            <Footer />
        </Styles>
    )
}

const Styles = styled.main`
    display: flex;
    flex-direction: column;
`

export default Home
