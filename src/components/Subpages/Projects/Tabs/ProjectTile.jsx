import 'react-tabs/style/react-tabs.css';
import PropTypes, { oneOfType } from 'prop-types';
import { FacebookIcon } from '@root/components/icons';
import { SmallButton } from '@root/components/Button/Button.styles';
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
  return (
    <>
      <ProjectWrapper>
        <StyledImage key={imageUrl} width="997px" height="579px" alt={title} src={imageUrl} />
        <StyledTabTextSection>
          <TitleWithDateContainer>
            <ProjectTitle>{title}</ProjectTitle>
            <ProjectDate>{date}</ProjectDate>
          </TitleWithDateContainer>
          <ProjectDescription>{description}</ProjectDescription>
          {linkUrl && (
            <ButtonWrapper>
              <a href={linkUrl} target="_blank" rel="noreferrer">
                <SmallButton icon={linkUrl.includes('facebook')}>
                  {linkUrl.includes('facebook') && <FacebookIcon />}
                  {linkCaption}
                </SmallButton>
              </a>
            </ButtonWrapper>
          )}
        </StyledTabTextSection>
      </ProjectWrapper>
    </>
  );
};

ProjectTile.propTypes = {
  projectData: PropTypes.objectOf(oneOfType([PropTypes.string, PropTypes.array])).isRequired,
};

export default ProjectTile;
