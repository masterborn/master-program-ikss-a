import React from 'react';
import PropTypes from 'prop-types';
import { CtaButton, StyledCtaSection, StyledCtaText } from './Tabs.styles';

const Cta = ({ middleCta }) => (
  <StyledCtaSection>
    <StyledCtaText>{middleCta.title}</StyledCtaText>
    <CtaButton>{middleCta.linkCaption}</CtaButton>
  </StyledCtaSection>
);

export default Cta;

Cta.propTypes = {
  middleCta: PropTypes.objectOf(PropTypes.string).isRequired,
};
