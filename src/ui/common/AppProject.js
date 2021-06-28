import React, { useState } from "react"
import styled from "styled-components"
import LabelWithTags from "./LabelWithTags"
import CenterCropImage from "./CenterCropImage"
import GithubLogo from "./svgs/GithubLogo"
import ImageViewer from "./ImageViewer"

function AppProject({ app, onClick }) {
    const [showImage, setShowImage] = useState(false)

    return (
        <Container onClick={onClick}>
            <div className="image-container" onClick={() => setShowImage(true)}>
                <CenterCropImage image={app.image} />
                <div className="see-fullscreen-container">
                    Voir en pleine écran
                </div>
            </div>
            <div className="info-container">
                <LabelWithTags label={app.appName} tags={app.tags} />
                <p className="content description">{app.description}</p>
                <h5 className="technologies-title">Technologies</h5>
                <p className="content technologies-content">
                    {app.technologies.join(", ")}
                </p>
            </div>

            <div className="more-info-container">
                <a
                    rel="noreferrer"
                    href={app.githubUrl}
                    target="_blank"
                    className="more-info-button"
                >
                    <div className="more-info-text">Plus d'infos</div>
                    <GithubLogo />
                </a>
            </div>

            <ImageViewer
                src={app.image}
                show={showImage}
                onClick={() => setShowImage(false)}
            />
        </Container>
    )
}

const Container = styled.section`
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
        cursor: pointer;
        position: relative;

        &:hover {
            .see-fullscreen-container {
                opacity: 1;
            }
        }

        height: 200px;

        .see-fullscreen-container {
            color: white;
            background-color: rgba(0, 0, 0, 0.5);
            position: absolute;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 2rem;
            font-family: Arial, Helvetica, sans-serif;
            text-align: center;
            transition: all 0.5s ease;
            opacity: 0;
        }
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
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-grow: 1;
    }

    .more-info-button {
        text-decoration: none;
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
