import React from 'react'
import styled from 'styled-components'
import AppBox from './AppBox'
import apps from './../../data/apps'

function Apps() {

    return (
        <Container>
            <AppsContainer>
                {
                    apps.map((app, index) => {
                        return <AppBox  
                                    app={app} 
                                    key={index}
                                    />
                    })
                }
            </AppsContainer>
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
`

const AppsContainer = styled.div`
    position: absolute;
    top: 100px;
    bottom: 0px;
    width: 70vw;
    min-width: 300px;
    left: 50%;
    transform: translateX(-50%);
    overflow-y: scroll;
    grid-template-columns: repeat(auto-fit, 300px);
    display: grid;
    grid-gap: 30px;
    align-content: flex-start;
    justify-content: center;
    grid-auto-rows: 275px;
    padding-top: 10px;
    
    @media (max-width: 768px) {
        top: 60px;
    }

`   

export default Apps