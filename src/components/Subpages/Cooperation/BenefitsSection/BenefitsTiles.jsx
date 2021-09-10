import React from 'react';
import PropTypes from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {
  BenefitsTilesWrapper,
  BenefitsTile,
  BenefitsTileHeading,
  BenefitsTileDescription,
} from './BenefitsSection.styles';

const BenefitsTiles = ({ benefitsTiles }) => (
  <BenefitsTilesWrapper>
    {benefitsTiles.map(
      ({
        fields: {
          text1: text,
          image1: {
            fields: {
              file: { url },
              title,
            },
          },
        },
      }) => (
        <BenefitsTile key={url}>
          <img src={`https://${url}`} alt="value" />
          <BenefitsTileHeading>{title}</BenefitsTileHeading>
          <BenefitsTileDescription as="div">
            {documentToReactComponents(text)}
          </BenefitsTileDescription>
        </BenefitsTile>
      ),
    )}
  </BenefitsTilesWrapper>
);
BenefitsTiles.propTypes = {
  benefitsTiles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BenefitsTiles;
