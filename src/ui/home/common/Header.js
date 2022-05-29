import React from 'react';
import styled from 'styled-components';

function Header({ title }) {
  return (
    <Container>
      <h2 className="title">{title}</h2>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  .title {
    text-align: center;
    font-weight: lighter;
    font-size: clamp(3rem, 5vw, 5rem);
    margin: 0em 1em;
  }
`;

export default Header;
