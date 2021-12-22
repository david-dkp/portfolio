import React from "react"
import styled from "styled-components"

function TestimonyItem({ testimony }) {
    return (
        <Container>
            <PersonContainer>
                {testimony.photoUrl && (
                    <div className="person-image-container">
                        <img src={testimony.photoUrl} alt="Profile" />
                    </div>
                )}
                <h5>
                    <span className="user-name">{testimony.name}</span>,{" "}
                    <span className="user-type">{testimony.type}</span>
                </h5>
            </PersonContainer>
            <TestimonyText>"{testimony.testimony}"</TestimonyText>
            <a className="source-name" href={testimony.source.linkUrl}>
                {testimony.source.name}
            </a>
        </Container>
    )
}

const Container = styled.div`
    width: 80vw;
    max-width: 500px;
    height: 550px;
    background-color: #20293f;
    display: flex;
    flex-direction: column;
    padding: 30px 40px 40px 40px;
    color: white;
    font-size: 1em;
    text-align: start;
    flex-wrap: nowrap;

    .source-name {
        font-size: 1.6em;
        margin-top: 20px;
        text-decoration: none;
        color: white;
        align-self: flex-start;
        flex-basis: 0px;

        &:hover {
            text-decoration: underline;
        }
    }
`

const PersonContainer = styled.div`
    gap: 15px;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: start;
    font-size: 1.7em;
    flex-basis: 0px;

    .person-image-container {
        width: 60px;
        height: 60px;
        border-radius: 999px;
        overflow: hidden;

        img {
            width: 100%;
        }
    }

    .user-name {
        font-weight: 500;
    }

    .user-type {
        font-weight: 300;
        font-style: italic;
    }
`

const TestimonyText = styled.p`
    overflow: scroll;
    padding-top: 15px;
    font-size: 1.5em;
    font-weight: lighter;
    flex-grow: 1;
    flex-basis: 0px;

    @media (max-width: 768px) {
        font-size: 1.3em;
    }
`

export default TestimonyItem
