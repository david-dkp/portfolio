import React, {useEffect, useState} from 'react'
import styled from "styled-components"

function SocialButton({svgComponent, color, socialName, url}) {

    const [socialWidth, setSocialWidth] = useState();

    useEffect(() => {
        const nameElement = document.getElementById(socialName)
        const width = nameElement.clientWidth
        console.log(width)
        setSocialWidth(width)
    })

    return (
        <Styles socialWidth={socialWidth} color={color} onClick={() => window.open(url, "_blank")}>
            {svgComponent()}
            <div className="social-name-container"><h1 id={socialName}>{socialName}</h1></div>
        </Styles>
    )
}

const Styles = styled.div`
    transition: all 0.5s ease;
    padding: 5px;
    display: flex;
    cursor: pointer;
    background-color:rgba(255, 255, 255, 0);
    border-radius: 7px;
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;

    svg {
        height: 30px;
        width: 30px;
        fill: white;
        transition: all 0.5s ease;
    }

    h1 {
        user-select: none;
        font-size: 1.4em;
    }

    .social-name-container {
        display: flex;
        justify-content: start;
        align-items: center;
        transition: all 0.5s ease;
        width: 0;
        overflow: hidden;
        margin-left: 5px;
        margin-right: 5px;
    }

    &:hover{
        transition: all 0.5s ease;
        background-color:rgba(255, 255, 255, 1);
        
        svg {
            transition: all 0.5s ease;
            fill: ${(props) => {
                return props.color
            }};
        }

        .social-name-container {
            transition: all 0.5s ease;
            width: ${props => props.socialWidth+"px"};
            overflow: visible;
        }

    }

`

export default SocialButton