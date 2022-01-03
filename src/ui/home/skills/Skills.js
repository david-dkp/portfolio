import React from "react"
import styled from "styled-components"
import Header from "../common/Header"
import skills from "../../../data/skills"
import Skill from "./Skill"

function Skills() {

    return (
        <Container>
            <Header title="Mes compétences"/>
            <div className="skills-container">
                {skills.map((e, i) => (
                    <div className="skill-group-container" key={i}>
                        <Skill skill={e}/>
                        {i < skills.length - 1 && (
                            <div className="skill-divider"/>
                        )}
                    </div>
                ))}
            </div>
        </Container>
    )
}

const Container = styled.section`
  margin-top: 70px;
  display: flex;
  flex-direction: column;

  .skills-container {
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    align-self: center;
    border-radius: 30px;
    width: 90vw;
    max-width: 800px;
    background-color: white;
  }

  .skill-group-container {
    display: flex;
  }
  
  .skill-divider {
    background-color: rgba(0, 0, 0, 0.1);
    width: 1px;
    height: 100%;
  }

  @media (max-width: 590px) {
    .skills-container {
      flex-direction: column;
      padding-top: 30px;
    }

    .skill-divider {
      width: 100%;
      height: 1px;
      margin-bottom: 30px;
    }
  }
`

export default Skills
