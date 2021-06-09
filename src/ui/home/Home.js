import React from "react"
import styled from "styled-components"
import Landing from "./Landing"
import Presentation from "./Presentation"
import RecentProjects from "./RecentProjects"

function Home() {
  return (
    <Styles>
      <Landing />
      <Presentation />
      <RecentProjects />
    </Styles>
  )
}

const Styles = styled.div`
  display: flex;
  flex-direction: column;
`

export default Home
