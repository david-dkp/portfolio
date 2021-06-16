import React from "react"
import styled from "styled-components"
import AppBox from "./AppBox"
import apps from "./../../data/apps"

function Apps() {
    return (
        <AppsContainer>
            {apps.map((app, index) => {
                return <AppBox app={app} key={index} />
            })}
        </AppsContainer>
    )
}

const AppsContainer = styled.div`
    position: relative;
    padding-top: 110px;
    width: 80vw;
    left: 50%;
    transform: translateX(-50%);
    grid-template-columns: repeat(auto-fit, 300px);
    display: grid;
    grid-gap: 30px;
    align-content: flex-start;
    justify-content: center;
    grid-auto-rows: 275px;
    padding-bottom: 30px;

    @media (max-width: 768px) {
        top: 0px;
        padding-top: 80px;
    }
`

export default Apps
