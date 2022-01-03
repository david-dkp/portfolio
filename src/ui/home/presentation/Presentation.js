import React from "react"
import styled from "styled-components"

function Presentation() {
    return (
        <Container>
            <div className="container-text">
                <h3>
                    Bonjour, moi c’est David. <br/>
                    Ravi de faire votre connaissance.
                </h3>
                <p>
                    Je suis un développeur spécialisé dans le
                    développement d’applications Web et Android. Je suis passionné
                    par ce que je fais et ce serait un plaisir de concrêtiser
                    vos idées :D.
                </p>
            </div>
        </Container>
    )
}

const Container = styled.section`
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

    h3 {
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
