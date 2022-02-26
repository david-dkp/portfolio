import React from 'react';
import styled from 'styled-components';

function CenterCropImage({ image, alt }) {
  return (
    <Container>
      <img src={image} alt={alt} />
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    width: 100%;
  }
`;

export default CenterCropImage;
