import React from "react"
import styled from "styled-components"
import Header from "../common/Header"
import AppProject from "../../common/AppProject"
import apps from "../../../data/apps"
import { Link } from "react-router-dom"

function RecentProjects() {
    return (
        <Container id="projects-section">
            <Header title="Mes projets récents" />
                <div className="projects-container">
                    {apps.map((app, i) => <AppProject key={i} app={app} />)}
                </div>
        </Container>
    )
}

const Container = styled.section`
    align-items: center;
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 70px;
  
    .projects-container {
      margin-top: 50px;
      width: 100%;
      max-width: 1500px;
      display: flex;
      flex-wrap: wrap;
      gap: 40px;
      margin-inline: 15px;
      justify-content: center;
    }

    .see-more-container {
        text-decoration: none;
        overflow: hidden;
        position: relative;
        width: 300px;
        height: 300px;
        border: 1px solid white;
        box-shadow: 0px 0px 2px black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-weight: lighter;
        font-size: 3rem;
        color: white;
        transition: all 0.5s ease;

        * {
            z-index: 1;
        }

        .see-more-background {
            position: absolute;
            border-radius: 999px;
            width: 0%;
            height: 0%;
            bottom: 0px;
            left: 0px;
            transform: translate(-50%, 50%);
            background-color: white;
            z-index: 0;
            transition: all 0.2s linear;
        }

        .logo {
            position: relative;
            width: 100px;
            height: 100px;

            * {
                transition: all 0.5s ease;
                position: absolute;
            }

            .first {
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                height: 6px;
                width: 100px;
                background-color: white;
            }

            .second {
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                height: 100px;
                width: 6px;
                background-color: white;
            }
        }

        .text {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
                Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
                sans-serif;
        }
    }

    .see-more-container:hover {
        color: black;

        .see-more-background {
            width: 300%;
            height: 300%;
        }

        .logo div {
            background-color: black;
        }
    }
`

export default RecentProjects
