import React from "react"
import styled from "styled-components"
import SkillSection from "./SkillSection"

function Skill({skill: {name, logo, languages, libraries, tools}}) {
    return (
        <Container logoColor={logo.color}>
            <div className="logo-container">
                {logo.svg()}
                <h4>{name}</h4>
                <div className="divider"/>
            </div>
            <div className="skill-section-container">
                <SkillSection
                    title="Langages"
                    contentText={languages.join(", ")}
                />
                <SkillSection
                    title="Librairies"
                    contentText={libraries.join(", ")}
                />
                <SkillSection title="Outils" contentText={tools.join(", ")}/>
            </div>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  flex: 1 0 0;
  align-items: center;
  font-size: 1.2em;
  padding: 2em 1em;

  .logo-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 30px;

    svg {
      fill: ${({logoColor}) => logoColor};
      width: 5em;
      height: 5em;
    }

    h4 {
      font-weight: 400;
      font-size: 2em;
    }
  }

  .divider {
    width: 70%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .skill-section-container {
    margin-top: 2.5em;
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100%;
    flex: 1 0 0;
    gap: 2em;
  }
`

export default Skill
