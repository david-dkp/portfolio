import React from "react"
import styled from "styled-components"
import {CloseRounded} from "@material-ui/icons";

function ImageViewer({src, alt, show, onClick}) {
    if (!show) return null

    const handleOnClick = (e) => {
        onClick()
    }

    return (
        <Container onClick={handleOnClick}>
            <img src={src} alt={alt}/>
            <CloseButton>
                <CloseRounded className={"close-icon"}/>
            </CloseButton>
        </Container>
    )
}

const Container = styled.div`
  z-index: 15;
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: clamp(15px, 4vw, 60px);
  right: clamp(15px, 4vw, 60px);
  cursor: pointer;
  width: 60px;
  height: 60px;
  background: white;
  color: black;
  border-radius: 50%;
  border: none;
  padding: 1em;

  .close-icon {
    z-index: 2;
    width: 100%;
    height: 100%;
  }
`

export default ImageViewer
