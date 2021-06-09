import React from "react"
import styled from "styled-components"

function CenterCropImage({ image, alt }) {
    return (
        <Container>
            <img src={image} alt={alt} />
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    flex: 1;
    overflow: hidden;
    max-height: 120px;

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
