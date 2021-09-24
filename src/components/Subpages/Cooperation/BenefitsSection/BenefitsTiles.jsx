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
          text1,
          title,
          image1: {
            fields: {
              file: { url },
            },
          },
        },
      }) => (
        <BenefitsTile key={url}>
          <img src={`https://${url}`} alt="title" />
          <BenefitsTileHeading>{title}</BenefitsTileHeading>
          <BenefitsTileDescription as="div">
            {documentToReactComponents(text1)}
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
