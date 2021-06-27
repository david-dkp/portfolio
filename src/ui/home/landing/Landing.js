import React from "react"
import styled from "styled-components"
import ProfileImage from "../../../assets/self_picture.png"
import { AndroidLogo } from "../../common/svgs"

function Landing() {
    return (
        <Container>
            <img
                data-aos="fade-up"
                data-aos-duration="1500"
                className="profile-image"
                src={ProfileImage}
                alt="Me standing"
                loading="eager"
            />
            <div className="container-text">
                <div className="container-name">
                    <p className="text-name">David Dekeuwer</p>
                </div>

                <h2 className="text-developer">
                    Développeur <span>d'application</span>
                </h2>

                <div className="container-android">
                    <h1 className="text-android">Android</h1>
                    <AndroidLogo fill="#fff" className="logo-android" />
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-self: center;
    width: 90%;
    max-width: 1100px;
    min-height: 100vh;
    align-items: center;
    justify-content: center;

    .container-text {
        display: flex;
        flex-direction: column;
        margin-top: 10%;
        color: white;
        flex-grow: 1;
        align-self: center;
        text-align: start;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-size: 14px;
    }

    .container-name {
        transform: translateY(0.8em);
        .text-name {
            font-style: normal;
            font-size: 2.2em;
            font-weight: lighter;
        }
    }

    .text-developer {
        font-size: 3em;
        font-weight: normal;
    }

    .container-android {
        display: inline-flex;
        align-items: center;
        margin-top: 0.3em;
        align-self: flex-end;
        font-size: 2.7em;

        .text-android {
            font-weight: normal;
        }

        .logo-android {
            * {
                transition: all 0.5s ease;
            }

            &:hover * {
                transition: all 0.5s ease;
                fill: #3ddb85;
            }
            margin-left: 0.5em;
        }
    }

    .profile-image {
        flex-shrink: 1;
        object-fit: cover;
        max-width: 550px;
        min-width: 425px;
    }

    @media (max-width: 1030px) {
        .container-text {
            font-size: 13px;
        }
    }

    @media (max-width: 948px) and (min-width: 769px) {
        .text-developer span {
            margin-left: 3em;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;

        .profile-image {
            width: 80vw;
        }

        .container-text {
            transform: translateY(-3em);
        }
    }

    @media (max-width: 504px) {
        .text-developer span {
            margin-left: 3em;
        }
    }
`

export default Landing
