import React from "react"
import styled from "styled-components"
import LabelWithTags from "../common/LabelWithTags"
import CenterCropImage from "../common/CenterCropImage"
import {Link} from "react-router-dom"

function AppBox({app: {id, image, appName, tags, description}}) {
    return (
        <Container to={`/apps/${id}`}>
            <div className="image-container">
                <CenterCropImage image={image} alt={appName + " image"}/>
            </div>
            <InfoContainer>
                <LabelWithTags label={appName} tags={tags}/>
                <p>{description}</p>
            </InfoContainer>
        </Container>
    )
}

const Container = styled(Link)`
  text-decoration: none;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  transition: all 0.5s ease;
  background-color: white;

  .image-container {
    min-height: 0px;
    background-color: #161b26;
    max-height: 45%;
  }

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
