import React from 'react'
import styled from 'styled-components'


function SkillTab({skill: { name, logo }, selected, onClick}) {

    return (
        <Container onClick={onClick} selected={selected} logoColor={logo.color}>
            {logo.svg()}
            <p>{name}</p>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 25px;
    transition: all 0.25s ease;

    background-color: ${({selected}) => selected ? "white" : "#B7B7B7"};

    svg {   
        width: 2.3em;
        height: 2.3em;
        fill: ${({logoColor}) => logoColor}
    }

`

export default SkillTab