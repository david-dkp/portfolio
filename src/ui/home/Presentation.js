import React from "react"
import styled from "styled-components"


function Presentation() {
    return (
        <Styles>
            <div className="text_description">
                <div className="main-text" >Développeur d'application</div>
                <div className="second-text">Android</div>
            </div>
        </Styles>
    )
}

const Styles = styled.div`
    height: 150vh;
    color: white;
`

export default Presentation