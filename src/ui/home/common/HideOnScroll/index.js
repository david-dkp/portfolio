import { Slide, useScrollTrigger } from '@mui/material';
import React from 'react';

const HideOnScroll = ({
  children,
  target = typeof window !== 'undefined' ? window : undefined,
}) => {
  const trigger = useScrollTrigger({
    target,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

export default HideOnScroll;
