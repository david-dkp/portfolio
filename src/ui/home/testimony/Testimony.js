import React from "react"
import styled from "styled-components"
import Header from "../common/Header"
import TestimonyItem from "./TestimonyItem"
import { Carousel } from "react-responsive-carousel"
import testimonies from "../../../data/testimonies"

function Testimony() {
    return (
        <Container>
            <Header title="Ce que les autres disent de moi..." />
            <div className="testimony-container">
                <Carousel
                    autoPlay={false}
                    showThumbs={false}
                    renderThumbs={false}
                    showStatus={false}
                    className="carousel"
                    swipeable={false}
                >
                    {testimonies.map((e, i) => (
                        <TestimonyItem testimony={e} key={i} />
                    ))}
                </Carousel>
            </div>
        </Container>
    )
}

const Container = styled.section`
    margin-top: 100px;
    display: flex;
    flex-direction: column;

    .testimony-container {
        margin-top: 30px;
        margin-bottom: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
    }

    .carousel {
        border-radius: 5px;
        width: 80vw;
        max-width: 500px;
        height: 550px;
    }
`
export default Testimony
