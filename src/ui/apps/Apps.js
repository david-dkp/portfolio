import React from "react"
import styled from "styled-components"
import AppBox from "./AppBox"
import apps from "./../../data/apps"

function Apps() {
  return (
    <Container>
      <div className="apps-parent-container">
        <AppsContainer>
          {apps.map((app, index) => {
            return <AppBox app={app} key={index} />
          })}
        </AppsContainer>
      </div>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;

  .apps-parent-container {
    position: absolute;
    overflow: scroll;

    top: 80px;
    left: 0px;
    right: 0px;
    bottom: 0px;

    padding-top: 40px;
    padding-bottom: 20px;

    @media (max-width: 768px) {
      top: 0px;
      padding-top: 80px;
    }
  }
`

const AppsContainer = styled.div`
  position: relative;
  top: 0px;
  width: 80vw;
  min-width: 300px;
  left: 50%;
  transform: translateX(-50%);
  grid-template-columns: repeat(auto-fit, 300px);
  display: grid;
  grid-gap: 30px;
  align-content: flex-start;
  justify-content: center;
  grid-auto-rows: 275px;
`

export default Apps
