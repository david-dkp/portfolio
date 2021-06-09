import React from "react"
import styled from "styled-components"
import LabelWithTags from "../common/LabelWithTags"
import CenterCropImage from "../common/CenterCropImage"

function AppBox({ app: { image, appName, tags, description } }) {
    return (
        <Container>
            <CenterCropImage image={image} alt={appName + " image"} />
            <InfoContainer>
                <LabelWithTags label={appName} tags={tags} />
                <p>{description}</p>
            </InfoContainer>
        </Container>
    )
}

const Container = styled.div`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    transition: all 0.5s ease;

    @media (min-width: 768px) {
        cursor: pointer;

        &:hover {
            transition: all 0.5s ease;
            transform: scale(1.05);
        }

        &:active {
            transition: all 0.25s ease;
            transform: scale(1.025);
        }
    }

    @media (max-width: 768px) {
        &:active {
            transition: all 0.25s ease;
            transform: scale(0.975);
        }
    }
`

const InfoContainer = styled.div`
    background-color: white;
    flex: 1;
    flex-direction: column;
    display: flex;
    padding: 15px;
    color: black;
    gap: 0.5em;
    font-size: 16px;

    p {
        font-family: Arial, Helvetica, sans-serif;
        text-align: start;
        line-height: 1.2em;
        font-size: 1em;
    }
`

export default AppBox
