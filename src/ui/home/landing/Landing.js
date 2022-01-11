import React, {useEffect, useState} from "react"
import styled from "styled-components"
import ProfileImage from "../../../assets/self-picture.jpg"
import {getAvailability} from "../../../apis/availabilityApi";

function Landing() {
    const [showAvailability, setShowAvailability] = useState(false)
    const [statusColor, setStatusColor] = useState()
    const [availabilityText, setAvailabilityText] = useState("")

    useEffect(() => {
        setTimeout(() => {
            getAvailability().then(availibity => {
                setStatusColor(availibity.fields.statusColor)
                setAvailabilityText(availibity.fields.availabilityText)
                setShowAvailability(true)
            })
        }, 1000)
    }, [])

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
                <AvailabilityContainer
                    loaded={showAvailability}
                    statusColor={statusColor}>
                    <div className={"availability-status"}/>
                    <p className={"availability-text"}>{availabilityText}</p>
                </AvailabilityContainer>

            </div>
        </Container>
    )
}

const Container = styled.section`
  display: flex;
  align-self: center;
  width: 100%;
  padding: clamp(3em, 4vw, 50px) 20px;
  max-width: 1100px;
  align-items: center;
  overflow-x: hidden;
  justify-content: center;

  .container-text {
    flex: 1 0 0px;
    display: flex;
    flex-direction: column;
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
    padding: 5em;
    border-radius: 120px;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .profile-image {
      width: 100%;
      padding: 4em;
    }
  }

  @media (max-width: 1030px) {
    .container-text {
      font-size: 13px;
    }
  }

  @media (min-width: 769px) and (max-width: 1096px) {
    .text-developer span {
      margin-left: 3em;
    }
  }

  @media (max-width: 510px) {
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

const AvailabilityContainer = styled.div`
  display: flex;
  align-items: start;
  gap: 0.8em;
  margin-top: 2em;
  transition: all 1s ease;

  ${({loaded}) => `
    transform: translateY(${loaded ? "0%" : "100%"});
    opacity: ${loaded ? "1" : "0"};
  `}
  .availability-status {
    margin-top: 2px;
    background-color: ${({statusColor}) => statusColor};
    width: 13px;
    border-radius: 999px;
    aspect-ratio: 1 / 1;
  }

  .availability-text {
    font-family: sans-serif;
    font-size: 1.2em;

  }
`

export default Landing
