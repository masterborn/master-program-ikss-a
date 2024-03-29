import 'react-tabs/style/react-tabs.css';
import PropTypes, { oneOfType } from 'prop-types';

import { SmallButton } from '@root/components/Button/Button.styles';
import { FacebookIcon } from '@root/components/icons';

import {
  StyledTabTextSection,
  TitleWithDateContainer,
  ProjectTitle,
  ProjectDate,
  ProjectDescription,
  ButtonWrapper,
  StyledImage,
  ProjectWrapper,
} from './Tabs.styles';

const ProjectTile = ({ projectData }) => {
  const { title, date, description, linkUrl, linkCaption, imageUrl } = projectData;
  const linkContainsFacebook = linkUrl?.includes('facebook');
  return (
    <ProjectWrapper>
      <StyledImage key={imageUrl} alt={title} src={imageUrl} role="presentation" />
      <StyledTabTextSection>
        <TitleWithDateContainer>
          <ProjectTitle>{title}</ProjectTitle>
          <ProjectDate>{date}</ProjectDate>
        </TitleWithDateContainer>
        <ProjectDescription>{description}</ProjectDescription>
        {linkUrl && (
          <ButtonWrapper>
            <a href={linkUrl} role="button">
              <SmallButton icon={linkContainsFacebook}>
                {linkContainsFacebook && <FacebookIcon />}
                {linkCaption || 'Zobacz więcej'}
              </SmallButton>
            </a>
          </ButtonWrapper>
        )}
      </StyledTabTextSection>
    </ProjectWrapper>
  );
};

ProjectTile.propTypes = {
  projectData: PropTypes.objectOf(oneOfType([PropTypes.string, PropTypes.array])).isRequired,
};

export default ProjectTile;
