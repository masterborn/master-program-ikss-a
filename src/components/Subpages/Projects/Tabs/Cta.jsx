import React from 'react';
import PropTypes from 'prop-types';
import { useModal } from '@root/contextProviders/useModal';
import { CtaButton, StyledCtaSection, StyledCtaText } from './Tabs.styles';

const Cta = ({ middleCta }) => {
  const { handleModal } = useModal();

  const openForm = () => {
    handleModal('open');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <StyledCtaSection>
      <StyledCtaText>{middleCta.title}</StyledCtaText>
      <CtaButton onClick={() => openForm()}>{middleCta.linkCaption}</CtaButton>
    </StyledCtaSection>
  );
};

export default Cta;

Cta.propTypes = {
  middleCta: PropTypes.objectOf(PropTypes.string).isRequired,
};
