import React from "react"
import styled from "styled-components"

function Presentation() {
    return (
        <Container>
            <div className="container-text">
                <h1>
                    Bonjour, moi c’est David. <br />
                    Ravi de faire votre connaissance.
                </h1>
                <p>
                    Je suis un jeune développeur spécialisé dans le
                    développement d’applications Android et suis également
                    interessé dans le développement d’applications Web.
                </p>
            </div>
        </Container>
    )
}

const Container = styled.div`
    color: white;
    background-color: #161b26;
    margin-top: 50px;

    .container-text {
        margin: auto;
        width: 90%;
        max-width: 700px;
        font-size: 33px;
        margin-top: 3em;
        margin-bottom: 3em;
        font-family: Arial, Helvetica, sans-serif;

        h1 {
            font-size: 1em;
        }

        p {
            margin-top: 1.2em;
            font-size: 0.7em;
        }
    }

    @media (max-width: 768px) {
        .container-text {
            font-size: 29px;
        }
    }
`

export default Presentation
