import React from 'react';
import PropTypes from 'prop-types';
import StarFilled from '../../assets/starFilled';
import StarEmpty from '../../assets/startEmpty';
import { Container } from './styles';

export function Stars({ value }) {
  const maxRating = 5;
  const stars = [];

  for (let i = 1; i <= maxRating; i++) {
    if (i <= value) {
      stars.push(<StarFilled key={i} />);
    } else {
      stars.push(<StarEmpty key={i} />);
    }
  }

  return <Container>{stars}</Container>;
}
