import React from 'react';
import Header from '../common/Header';
import styled from 'styled-components';
import softSkills from '../../../data/softSkills';
import SoftSkill from './SoftSkill';

function Personalities() {
  return (
    <Container>
      <Header title="Je suis" />
      <div className="soft-skills-container">
        {softSkills.map((softSkill, index) => {
          return (
            <SoftSkill
              data-aos-once="true"
              data-aos="zoom-out"
              data-aos-duration="1000"
              data-aos-easing="ease"
              softSkill={softSkill}
              key={index}
            />
          );
        })}
      </div>
    </Container>
  );
}

const Container = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;

  .soft-skills-container {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;
    width: 90vw;
    max-width: 900px;
  }
`;

export default Personalities;
