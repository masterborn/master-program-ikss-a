import React from 'react';
import PropTypes from 'prop-types';
import { useMedia } from 'react-use';
import { medias } from '@root/styles/theme';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Carousel from './Carousel';
import { ValuesWrapper, Heading, Description } from './ValuesSection.styles';
import Tiles from './Tiles';

const ValuesSection = ({ valuesHeader: { title, text1: description }, valuesTiles }) => {
  const isSmall = useMedia(medias.small);
  return (
    <ValuesWrapper>
      <Heading>{title}</Heading>
      <Description as="div">{documentToReactComponents(description)}</Description>
      {typeof window !== 'undefined' && !isSmall && <Tiles tiles={valuesTiles} />}
      {typeof window !== 'undefined' && isSmall && <Carousel tiles={valuesTiles} />}
    </ValuesWrapper>
  );
};

ValuesSection.propTypes = {
  valuesHeader: PropTypes.objectOf(PropTypes.any).isRequired,
  valuesTiles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ValuesSection;
