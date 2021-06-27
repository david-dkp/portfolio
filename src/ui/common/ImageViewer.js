import React from "react"
import styled from "styled-components"

function ImageViewer({ src, alt, show, onClick }) {
    if (!show) return null

    const handleOnClick = (e) => {
        onClick()
    }

    return (
        <Container onClick={handleOnClick}>
            <img src={src} alt={alt} />
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

export default ImageViewer
