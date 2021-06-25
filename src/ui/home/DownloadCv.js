import React from 'react'
import styled from 'styled-components'
import cvpdf from "../../assets/cv_david_dekeuwer.pdf"



function DownloadCv() {


    return (
        <Container>
            <DownloadButton href={cvpdf} target="_blank">Consulter mon CV</DownloadButton>   
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    padding: 2em 1em 0px 1em;
`

const DownloadButton = styled.a`
    padding: 0.5em 1em;
    font-size: 1.2em;
    border-radius: 15px;
    border: 1px solid white;
    transition: all 0.5s ease;
    cursor: pointer;
    text-decoration: none;
    color: white;

    &:hover {
        color: black;
        background-color: white;
    }

    &:active {
        background-color: grey;
    }
`

export default DownloadCv