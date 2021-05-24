import React from 'react'
import styled from "styled-components"
import Presentation from "./Presentation"

function Home() {

    return (
        <Styles>
            <Presentation/>
        </Styles>
    
    )
}

const Styles = styled.div`
    display: flex;
    flex-direction: column;
`

export default Home