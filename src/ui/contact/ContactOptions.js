import React from "react"
import styled from "styled-components"
import ContactOption from "./ContactOption"
import { PhoneLogo, LinkedinLogo } from "../common/svgs"

function ContactOptions() {
    return (
        <Container>
            <div className="header-title">Contactez-moi</div>
            <div className="options-container">
                <ContactOption
                    title="Par téléphone"
                    text="0781923016"
                    logo={PhoneLogo}
                    href="tel:0781923016"
                    target="_blank"
                />

                <ContactOption
                    title="Sur LinkedIn"
                    text="David Dekeuwer"
                    logo={LinkedinLogo}
                    href="https://www.linkedin.com/in/david-dekeuwer-1940a01b9/"
                    target="_blank"
                />
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 40px;

    .options-container {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        gap: 40px;
        justify-content: space-around;
    }

    .header-title {
        color: white;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-weight: lighter;
        font-size: 2.9em;
    }

    @media (max-width: 1200px) {
        margin-bottom: 50px;
        margin-left: 15px;
        margin-right: 15px;

        .options-container {
            justify-content: center;
            flex-direction: row;
            flex-wrap: wrap;
        }
    }
`

export default ContactOptions
