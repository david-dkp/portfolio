import React from "react"
import styled from "styled-components"
import Landing from "./Landing"
import Presentation from "./Presentation"
import RecentProjects from "./RecentProjects"
import Skills from "./skills/Skills"
import ContactMe from "./ContactMe"


function Home() {
  return (
    <Styles>
      <Landing />
      <Presentation />
      <Skills />
      <RecentProjects />
      <ContactMe />
    </Styles>
  )
}

const Styles = styled.div`
  display: flex;
  flex-direction: column;
`

export default Home
