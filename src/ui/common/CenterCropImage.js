import React from "react"
import styled from "styled-components"

function CenterCropImage({ image, alt }) {
    return <Container image={image} />
}

const Container = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;

    background-position: center center;
    background-repeat: no-repeat;
    background-image: url(${({ image }) => image});
    background-size: cover;
`

export default CenterCropImage
