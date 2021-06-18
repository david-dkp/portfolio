import React, { useEffect } from "react"
import styled, { keyframes } from "styled-components"
import AppBox from "./AppBox"
import AppProject from "../home/AppProject"
import apps from "./../../data/apps"
import { useParams, useHistory } from "react-router-dom"

function Apps() {
    const history = useHistory()
    const params = useParams()

    const app = apps.find((app) => app.id === params.id)

    if (app) {
        document.body.classList.add("noscroll")
    } else {
        document.body.classList.remove("noscroll")
    }

    return (
        <div>
            <AppsContainer>
                {apps.map((app, index) => {
                    return (
                        <AppBox
                            onClick={() => {
                                history.replace(`/apps/${app.id}`)
                            }}
                            app={app}
                            key={index}
                        />
                    )
                })}
            </AppsContainer>

            {app && (
                <AppContainer onClick={() => history.replace("/apps")}>
                    <AppProject
                        app={app}
                        onClick={(e) => e.stopPropagation()}
                    />
                </AppContainer>
            )}
        </div>
    )
}

const AppsContainer = styled.div`
    position: relative;
    padding-top: 110px;
    width: 80vw;
    min-height: 100vh;
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

const fadeIn = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`

const AppContainer = styled.div`
    overscroll-behavior: none;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    overflow: scroll;
    animation: 250ms ${fadeIn};

    @media (min-height: 600px) {
        align-items: center;
    }

    @media (max-height: 600px) {
        padding: 70px 0px;
    }
`

export default Apps
