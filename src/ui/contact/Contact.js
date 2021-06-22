import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
import { useForm } from "@formspree/react"

function Contact() {
    const [state, handleSubmit] = useForm("contactForm")
    const [hasResetfields, setHasResetFields] = useState(false)

    const handleFormSubmit = (datas) => {
        datas.preventDefault()
        setHasResetFields(false)
        handleSubmit(datas)
    }

    const [emailText, setEmailText] = useState("")
    const [subjectText, setSubjectText] = useState("")
    const [messageText, setMessageText] = useState("")

    const showEmailError = state.errors.find((e) => e.field === "email")
    const showMessageError = state.errors.find((e) => e.field === "message")

    const resetFields = () => {
        setEmailText("")
        setSubjectText("")
        setMessageText("")
    }

    if (state.succeeded && !hasResetfields && !state.submitting) {
        resetFields()
        setHasResetFields(true)
    }

    return (
        <Container
            showEmailError={!state.submitting && showEmailError}
            showMessageError={!state.submitting && showMessageError}
        >
            <h1 className="title">Envoyez-moi un message</h1>
            <form method="post" onSubmit={handleFormSubmit}>
                {state.succeeded && (
                    <h1 className="sent-message">Le message a été envoyé</h1>
                )}

                <div className="input-container">
                    <p className="error-text email">Un email est requis</p>
                    <input
                        value={emailText}
                        onChange={(e) => setEmailText(e.target.value)}
                        className="email"
                        type="email"
                        name="email"
                        placeholder="Email"
                    />
                </div>

                <div className="input-container">
                    <input
                        value={subjectText}
                        onChange={(e) => setSubjectText(e.target.value)}
                        type="text"
                        className="subject"
                        name="subject"
                        placeholder="Objet"
                    />
                </div>

                <div className="input-container">
                    <p className="error-text message">Un message est requis</p>
                    <textarea
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                        type="text"
                        className="message"
                        name="message"
                        placeholder="Message"
                    />
                </div>
                <SubmitButton isLoading={state.submitting} type="submit">
                    Envoyer
                    <div className="loading-overlay">
                        <div />
                        <div />
                        <div />
                    </div>
                </SubmitButton>
            </form>
        </Container>
    )
}

const growingBall = keyframes`
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.2);
    }

    100% {
        tranform: scale(1);
    }
}
`

const Container = styled.div`
    margin: auto;
    width: 90vw;
    max-width: 600px;
    min-height: 100vh;
    text-align: center;
    color: white;
    padding-top: 100px;

    .input-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .error-text {
            transition: all 0.5s ease;
            font-size: 0.8em;
            margin-left: 1em;
        }

        .error-text.email {
            margin-bottom: ${({ showEmailError }) =>
                showEmailError ? "0.3em" : "-1.1em"};
        }

        .error-text.message {
            margin-bottom: ${({ showMessageError }) =>
                showMessageError ? "0.3em" : "-1em"};
        }
    }

    .title {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-weight: lighter;
        font-size: 3.2em;
    }

    form {
        margin-top: 50px;
        align-items: center;
        display: flex;
        flex-direction: column;
        font-size: 20px;
        gap: 10px;

        .sent-message {
            display: inline-block;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
                Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
                sans-serif;
            font-weight: lighter;
            color: green;
            font-size: 1.5em;
            max-width: 500px;
            width: 90vw;
        }
    }

    input,
    textarea {
        border: none;
        width: 90vw !important;
        max-width: 500px;
        background-color: #161b26;
        color: white;
        font-size: 1em;
        padding: 0.6em 0.8em;
        border-radius: 7px;
        resize: none;
        box-shadow: 0px 0px 2px black;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        border: 1px solid rgba(0, 0, 0, 0);
        transition: all 0.25s ease;

        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus,
        &:-webkit-autofill:active {
            transition: background-color 5000s ease-in-out 0s;
            -webkit-text-fill-color: white !important;
        }

        &:focus {
            outline: none;
            border: 1px solid white;
            transition: all 0.25s ease;
        }
    }

    textarea.message {
        font-size: 0.8em;
        min-height: 230px;
    }
`

const SubmitButton = styled.button`
    overflow: hidden;
    position: relative;
    background-color: #161b26;
    color: white;
    border: 1px solid white;
    border-radius: 999px;
    font-size: 1em;
    padding: 0.2em 1.2em;
    margin-top: 1em;
    margin-bottom: 40px;
    transition: all 0.25s linear;
    cursor: pointer;
    pointer-events: ${({ isLoading }) => (isLoading ? "none" : "inherit")};
    outline: none;

    .loading-overlay {
        position: absolute;
        left: 0px;
        top: 0px;
        right: 0px;
        bottom: 0px;
        background-color: rgba(0, 0, 0, 0.5);
        justify-content: center;
        align-items: center;
        gap: 9px;
        display: ${({ isLoading }) => (isLoading ? "flex" : "none")};
        transition: all 0.5s ease;

        div {
            animation: ${growingBall} 0.7s linear infinite;
            background-color: white;
            border-radius: 999px;
            height: 0.4em;
            width: 0.4em;

            &:nth-child(1) {
                animation-delay: 0ms;
            }

            &:nth-child(2) {
                animation-delay: 200ms;
            }

            &:nth-child(3) {
                animation-delay: 400ms;
            }
        }
    }

    &:hover {
        background-color: white;
        color: #161b26;
    }
`

export default Contact
