import React from "react"
import styled from "styled-components"
import LabelWithTags from "../common/LabelWithTags"
import CenterCropImage from "../common/CenterCropImage"
import GithubLogo from "../svgs/GithubLogo"

function AppProject({ app, onClick }) {
    return (
        <Container onClick={onClick}>
            <div className="image-container">
                <CenterCropImage image={app.image} />
            </div>
            <div className="info-container">
                <LabelWithTags label={app.appName} tags={app.tags} />
                <p className="content description">{app.description}</p>
                <h2 className="technologies-title">Technologies</h2>
                <p className="content technologies-content">
                    {app.technologies.join(", ")}
                </p>
            </div>

            <div className="more-info-container">
                <div
                    onClick={(e) => {
                        e.stopPropagation()
                        window.open(app.githubUrl)
                    }}
                    className="more-info-button"
                >
                    <div className="more-info-text">Plus d'infos</div>
                    <GithubLogo />
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    overflow: hidden;
    display: flex;
    border-radius: 23px;
    flex-direction: column;
    background-color: white;
    max-width: 450px;
    width: 90vw;
    height: 600px;
    text-align: start;

    .image-container {
        height: 200px;
    }

    .info-container {
        height: 300px;
        overflow: scroll;
        padding: 30px;
        padding-bottom: 0px;
        display: inline-flex;
        flex-direction: column;
        gap: 10px;
        font-size: 19px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }

    .technologies-title {
        margin-top: 0.5em;
        font-size: 1.2em;
        font-style: normal;
        font-weight: 400;
    }

    .content {
        font-size: 1em;
    }

    .more-info-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-grow: 1;
    }

    .more-info-button {
        align-items: center;
        justify-content: center;
        display: flex;
        width: 70%;
        max-width: 250px;
        background-color: #1f273d;
        border-radius: 999px;
        color: white;
        fill: white;
        position: relative;
        font-size: 20px;
        padding: 0.5em 0em 0.5em 0em;
        box-shadow: 0px 0px 3px black;
        transition: all 0.5s ease;
        cursor: pointer;

        &:hover {
            transform: scale(1.05);
        }

        &:active {
            transform: scale(1.025);
        }

        .more-info-text {
            justify-self: center;
            user-select: none;
        }

        svg {
            position: absolute;
            right: 0px;
            margin-right: 1em;
            width: 1.5em;
            height: 1.5em;
        }
    }
`

export default AppProject
