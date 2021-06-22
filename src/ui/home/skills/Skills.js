import React, {useState} from "react"
import styled from "styled-components"
import Header from "../Header"
import skills from "../../../data/skills"
import SkillTab from "./SkillTab"
import Technology from "./Technology"


function Skills() {

  const [selectedSkill, setSelectedSkill] = useState(skills[0])

  return (
    <Container>
        <Header title="Mes compétences"/>
        <div className="skills-container">
          <div className="skills-tab">
            {skills.map((skill, index) => {
                return <SkillTab onClick={(e) => setSelectedSkill(skill)} skill={skill} key={index} selected={selectedSkill === skill} />
            })}
          </div>
          <div className="skills-content">
            <div className="skills-technologies">
                {selectedSkill.technologies.sort((a, b) => b.level - a.level).map((technology, index) => <Technology technology={technology} />)}
            </div>
          </div>
        </div>
    </Container>
  ) 
}

const Container = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;

  .skills-container {
    overflow: hidden;
    align-self: center;
    width: 90vw;
    max-width: 1000px;
    margin: 70px 0px;
    display: flex;
    background-color: white;
    border-radius: 23px;
  }

  .skills-tab {
    display: flex;
    flex-direction: column;
    flex: 1 1 0px;
    div {
      flex: 1 1 0px;
    }
  }

  .skills-content {
    overflow: scroll;
    height: 500px;
    flex: 3 1 0px;
  }

  .skills-technologies {
    color: white;
    display: flex;
    flex-wrap: wrap;
    padding: 30px;
    gap: 20px;
  }

  @media (max-width: 768px) {
    .skills-container {
      flex-direction: column;
    }

    .skills-content {
      flex: none;
    }

    .skills-tab {
      flex-direction: row;
      height: auto;
      div {
        padding: 1em 0px;
      }
    }
  }
`

export default Skills
