import React from 'react'
import styled from "styled-components"


function AppBox({app: {image, appName, tags, description}}){
    
    return (
        <Container>
            <Image> <img src={image} alt={appName + " image"} /> </Image>
            <InfoContainer>
                <div className="label-tags-container">
                    <h2>{appName}</h2>
                    <div className="tags-container">
                        {
                            tags.map((tag, index) => {
                                return (<Tag backgroundColor={tag.color} key={index}>{tag.label}</Tag>)
                            })
                        }
                    </div>
                </div> 
                <p>{description}</p>
            </InfoContainer>
        </Container>
    )
}


const Container = styled.div`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    transition: all 0.5s ease;

    @media (min-width: 768px) {
        cursor: pointer;

        &:hover {
            transition: all 0.5s ease;
            transform: scale(1.05);
        }

        &:active {
        transition: all 0.25s ease;
        transform: scale(1.025);
        }

    }

    @media (max-width: 768px) {
        &:active {
            transition: all 0.25s ease;
            transform: scale(0.975);
        }
    }

`

const InfoContainer = styled.div`
    background-color: white;
    flex: 1;
    flex-direction: column;
    display: flex;
    padding: 15px;
    color: black;
    gap: 5px;
    
    p {
        font-family: Arial, Helvetica, sans-serif;
        text-align: start;
        line-height: 20px;
    }

    .label-tags-container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 4px;
        

        h2 {
            font-weight: 400;
            font-size: 1.3em;
            font-family: Arial, Helvetica, sans-serif;
            text-align: start;
        }

        .tags-container {
            display: flex;
            gap: 10px;
        }
    }
`

const Tag = styled.div`
    justify-content: center;
    align-items: center;
    color: white;
    background-color: ${(props) => props.backgroundColor};
    display: inline-block;
    border-radius: 999px;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 2px;
    padding-bottom: 2px;
    white-space: nowrap;
    font-size: 0.9em;
`

const Image = styled.div`
    position: relative;
    flex: 1;
    overflow: hidden;

    img {
        position: absolute;
        left: -1000%;
        right: -1000%;
        top: -1000%;
        bottom: -1000%;
        margin: auto;
        min-height: 100%;
        min-width: 100%;    
    }
`

export default AppBox