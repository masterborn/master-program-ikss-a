import React from 'react';
import PropTypes from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useRouter } from 'next/router';
import { useModal } from '@root/contextProviders/useModal';
import routes from '@root/handlers/routes';
import {
  CtaWrapper,
  StyledBodyText,
  ResponsiveButton,
  StyledHeader,
} from './GenericBottomCta.styles';

const GenericBottomCta = ({ bottomCta }) => {
  const { handleModal } = useModal();
  const { pathname } = useRouter();

  const openForm = () => handleModal('open');

  return (
    <CtaWrapper
      projectsSubpage={pathname === routes.projects}
      aboutUsSubpage={pathname === routes.aboutUs}
    >
      <StyledHeader>{bottomCta.title}</StyledHeader>
      <StyledBodyText>{documentToReactComponents(bottomCta.text1)}</StyledBodyText>
      <ResponsiveButton name="open-form" onClick={openForm}>
        {bottomCta.linkCaption}
      </ResponsiveButton>
    </CtaWrapper>
  );
};

GenericBottomCta.propTypes = {
  bottomCta: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object]))
    .isRequired,
};

export default GenericBottomCta;
