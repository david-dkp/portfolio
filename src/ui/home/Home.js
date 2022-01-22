import React, { useEffect } from "react"
import styled from "styled-components"
import Landing from "./landing/Landing"
import Presentation from "./presentation/Presentation"
import RecentProjects from "./recentprojects/RecentProjects"
import Skills from "./skills/Skills"
import Footer from "./footer/Footer"
import DownloadCv from "./cv/DownloadCv"
import SoftSkills from "./personalities/SoftSkills"
import Testimony from "./testimony/Testimony"
import Contact from "./contact/Contact"
import { useLocation } from "react-router-dom"
import { scroller } from "react-scroll"

function Home() {
    const location = useLocation()

    const scrollConfig = {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -100,
    }

    useEffect(() => {
        if (location.hash) {
            scroller.scrollTo(
                location.hash.substring(1, location.hash.length),
                scrollConfig
            )
        }
    })

    return (
        <Styles>
            <Landing />
            <Presentation />
            <SoftSkills />
            <Skills />
            <RecentProjects />
            <Testimony />
            <DownloadCv />
            <Contact />
            <Footer />
        </Styles>
    )
}

const Styles = styled.main`
    display: flex;
    flex-direction: column;
`

export default Home
