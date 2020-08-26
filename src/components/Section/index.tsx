import React from 'react';

import { Container } from './styles';

interface Props {
  variant: 'blue' | 'beige' | 'white' | 'black';
  title?: string;
  subtitle?: string;
  description?: string;
  img?: string;
}

const Section: React.FC<Props> = ({
  variant,
  title,
  subtitle,
  description,
  img,

}) => (
  return (
    <Container>

    </Container>
  );
};

export default Section;
