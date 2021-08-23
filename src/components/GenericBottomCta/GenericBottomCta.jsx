import React from 'react';
import PropTypes from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { H3 } from '@root/components/typography/Typography';
import { CtaWrapper, StyledBodyText, StyledBigButton } from './GenericBottomCta.styles';

const GenericBottomCta = ({ bottomCta }) => (
  <>
    <CtaWrapper>
      <H3>{bottomCta.title}</H3>
      <StyledBodyText>{documentToReactComponents(bottomCta.text1)}</StyledBodyText>
      <StyledBigButton>{bottomCta.linkCaption}</StyledBigButton>
    </CtaWrapper>
  </>
);

GenericBottomCta.propTypes = {
  bottomCta: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object]))
    .isRequired,
};

export default GenericBottomCta;
