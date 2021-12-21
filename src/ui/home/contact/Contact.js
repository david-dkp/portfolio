import React, { useEffect } from "react"
import styled from "styled-components"
import SendMessageForm from "./SendMessageForm"
import OrSeparator from "./OrSeparator"
import ContactOptions from "./ContactOptions"

function Contact() {

    return (
        <Container>
            <div className="contact-line" />
            <div className="sub-container">
                <SendMessageForm />
                <OrSeparator />
                <ContactOptions />
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;  
  
    .contact-line {
      height: 1px;
      width: 100vw;
      background-color: black;
    }
  
    .sub-container {
        margin-block: 100px;
        align-items: stretch;
        display: flex;
        width: 90vw;
        max-width: 1400px;
        justify-content: space-around;
    }

    @media (max-width: 1200px) {
        .sub-container {
            flex-direction: column;
            align-items: center;
            gap: 40px;
            width: auto;
        }
    }
`

export default Contact
