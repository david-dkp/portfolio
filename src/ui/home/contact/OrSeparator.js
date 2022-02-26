import React from 'react';
import styled from 'styled-components';

function OrSeparator() {
  return (
    <Container>
      <div className="line" />
      <p className="or">OU</p>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  overflow: visible;

  .line {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    width: 1px;
    background-color: white;
  }

  .or {
    z-index: 1;
    background-color: #161b26;
    color: white;
    font-size: 30px;
    border-radius: 999px;
    border: 1px solid white;
    padding: 1em;
  }

  @media (max-width: 1200px) {
    .line {
      width: 100%;
      height: 1px;
      left: 0px;
      transform: none;
    }
  }
`;

export default OrSeparator;
