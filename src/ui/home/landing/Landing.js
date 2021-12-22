import React from "react"
import styled from "styled-components"
import ProfileImage from "../../../assets/self-picture.png"
import {AndroidLogo} from "../../common/svgs"

function Landing() {
    return (
        <Container>
            <img
                data-aos-once="true"
                data-aos="fade-up"
                data-aos-duration="1500"
                className="profile-image"
                src={ProfileImage}
                alt="Moi avec les bras croisés"
            />
            <div className="container-text">
                <div className="name-container">
                    <h3
                        data-aos-duration="1000"
                        data-aos-delay="1000"
                        data-aos-once="true"
                        data-aos="slide-up"
                        className="text-name"
                    >
                        David Dekeuwer
                    </h3>
                </div>

                <h2
                    data-aos-once="true"
                    data-aos-duration="1000"
                    data-aos="fade-left"
                    data-aos-delay="500"
                    className="text-developer"
                >
                    Développeur <span>d'applications</span>
                </h2>

                <div
                    data-aos-once="true"
                    data-aos-duration="1000"
                    data-aos="fade-left"
                    data-aos-delay="500"
                    className="container-android"
                >
                    <h2 className="text-android">Web/Android</h2>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.section`
  display: flex;
  align-self: center;
  width: 100%;
  padding: 0px 20px;
  max-width: 1100px;
  min-height: 100vh;
  align-items: center;
  overflow-x: hidden;
  flex-wrap: wrap;
  justify-content: center;

  .container-text {
    flex: 1 0 0px;
    display: flex;
    flex-direction: column;
    margin-top: 10%;
    color: white;
    align-self: center;
    text-align: start;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 14px;
  }

  .name-container {
    overflow: hidden;
    margin-bottom: -0.7em;
  }

  .text-name {
    font-style: normal;
    font-weight: lighter;
    font-size: 2.2em;
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
    font-size: 3em;

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
    flex: 1 1 0;
    object-fit: cover;
    max-width: 550px;
    min-width: 400px;
  }

  @media (max-width: 1030px) {
    .container-text {
      font-size: 13px;
    }
  }

  @media (min-width: 796px) and (max-width: 1053px) {
    .text-developer span {
      margin-left: 3em;
    }
  }

  @media (max-width: 403px) {
    .container-text {
      font-size: 11px;
    }
  }
`

export default Landing
