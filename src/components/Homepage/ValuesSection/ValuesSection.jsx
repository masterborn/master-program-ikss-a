import React from 'react';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import PropTypes from 'prop-types';

import Carousel from './Carousel';
import Tiles from './Tiles';
import { ValuesWrapper, Heading, Description } from './ValuesSection.styles';

const ValuesSection = ({ valuesHeader: { title, text1: description }, valuesTiles }) => (
  <ValuesWrapper>
    <Heading>{title}</Heading>
    <Description as="div">{documentToReactComponents(description)}</Description>
    <Tiles tiles={valuesTiles} />
    <Carousel tiles={valuesTiles} />
  </ValuesWrapper>
);

ValuesSection.propTypes = {
  valuesHeader: PropTypes.objectOf(PropTypes.any).isRequired,
  valuesTiles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ValuesSection;
