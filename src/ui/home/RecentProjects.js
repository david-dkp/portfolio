import React from "react"
import styled from "styled-components"
import Header from "./Header"
import AppProject from "./AppProject"
import apps from "../../data/apps"
import { useHistory } from "react-router-dom"

function RecentProjects() {
    const history = useHistory()

    return (
        <Container>
            <Header title="Mes projets récents" />
            <div className="subcontainer">
                <div className="projects-container">
                    <AppProject app={apps[2]} />
                    <AppProject app={apps[3]} />
                </div>
                <div
                    className="see-more-container"
                    onClick={() => history.push("/apps")}
                >
                    <div className="logo">
                        <div className="first" />
                        <div className="second" />
                    </div>
                    <div className="text">Voir plus</div>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    align-items: center;
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    .subcontainer {
        justify-content: space-around;
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        margin-top: 70px;
        gap: 70px;
    }

    .projects-container {
        align-items: center;
        display: flex;
        justify-content: center;
        gap: 70px;
        flex-wrap: wrap;
    }

    .see-more-container {
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
        background-color: white;
        color: black;

        .logo div {
            background-color: black;
        }
    }
`

export default RecentProjects
