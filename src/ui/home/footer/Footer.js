import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <Container>
      <span>Copyright © {new Date().getFullYear().toString()} - </span>David
      Dekeuwer
    </Container>
  );
}

const Container = styled.section`
  background-color: #1f283d;
  color: white;
  font-size: clamp(12px, 5vw, 22px);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 2.5em 2em;

  span {
    color: grey;
  }
`;

export default Footer;
