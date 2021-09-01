import React from 'react';
import PropTypes from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useRouter } from 'next/router';
import {
  CtaWrapper,
  StyledBodyText,
  ResponsiveButton,
  StyledHeader,
} from './GenericBottomCta.styles';

const GenericBottomCta = ({ bottomCta }) => {
  const { pathname } = useRouter();
  return (
    <CtaWrapper projectsSubpage={pathname === '/projekty'}>
      <StyledHeader>{bottomCta.title}</StyledHeader>
      <StyledBodyText>{documentToReactComponents(bottomCta.text1)}</StyledBodyText>
      <ResponsiveButton>{bottomCta.linkCaption}</ResponsiveButton>
    </CtaWrapper>
  );
};

GenericBottomCta.propTypes = {
  bottomCta: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object]))
    .isRequired,
};

export default GenericBottomCta;
