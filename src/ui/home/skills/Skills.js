import React, { useState } from "react"
import styled from "styled-components"
import Header from "../common/Header"
import skills from "../../../data/skills"
import Skill from "./Skill"

function Skills() {
    const [selectedSkill, setSelectedSkill] = useState(skills[0])

    return (
        <Container>
            <Header title="Mes compétences" />
            <div className="skills-container">
                {skills.map((e, i) => (
                    <>
                        <Skill key={i} skill={e} />{" "}
                        {i < skills.length - 1 && (
                            <div className="skill-divider" />
                        )}
                    </>
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

    .skill-divider {
        background-color: rgba(0, 0, 0, 0.1);
        width: 1px;
    }
`

export default Skills
