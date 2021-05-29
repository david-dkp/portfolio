import React from "react"
import styled from "styled-components"
import Landing from "./Landing"

function Home() {
  return (
    <Styles>
      <Landing />
    </Styles>
  )
}

const Styles = styled.div`
  display: flex;
  flex-direction: column;
`

export default Home
