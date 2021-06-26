import React from "react"
import styled from "styled-components"

function CenterCropImage({ image, alt }) {
    return (
        <Container>
            <img loading="lazy" src={image} alt={alt} />
        </Container>
    )
}

const Container = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;

    img {
        position: absolute;
        left: -1000%;
        right: -1000%;
        top: -1000%;
        bottom: -1000%;
        margin: auto;
        min-height: 100%;
        min-width: 100%;
    }
`

export default CenterCropImage
