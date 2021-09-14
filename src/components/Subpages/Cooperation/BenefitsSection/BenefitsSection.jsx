import React from 'react';
import PropTypes from 'prop-types';
import { BenefitsSectionWrapper, BenefitsHeading } from './BenefitsSection.styles';
import BenefitsTiles from './BenefitsTiles';

const BenefitsSection = ({ title, benefitsTiles }) => (
  <BenefitsSectionWrapper>
    <BenefitsHeading>{title}</BenefitsHeading>
    <BenefitsTiles benefitsTiles={benefitsTiles} />
  </BenefitsSectionWrapper>
);

BenefitsSection.propTypes = {
  title: PropTypes.objectOf(PropTypes.any).isRequired,
  benefitsTiles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BenefitsSection;
