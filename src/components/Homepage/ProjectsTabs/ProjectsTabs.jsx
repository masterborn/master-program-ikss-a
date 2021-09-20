/* eslint-disable react/jsx-props-no-spreading */
import 'react-tabs/style/react-tabs.css';
import PropTypes from 'prop-types';
import getProjectsData from '@root/handlers/getProjectsData';
import compareProjectsOrder from '@root/handlers/compareProjectsOrder';
import { FacebookIcon } from '@root/components/icons';
import { SmallButton } from '@root/components/Button/Button.styles';
import {
  StyledTabs,
  StyledTab,
  StyledTabList,
  StyledTabPanel,
  StyledTabTextSection,
  TitleWithDateContainer,
  ProjectTitle,
  ProjectDate,
  ProjectDescription,
  SeeProjectsButton,
  ButtonWrapper,
  StyledVideo,
  StyledImage,
  VideoResponsive,
  ResponsiveHeader,
  ResponsiveButton,
} from './ProjectsTabs.styles';

const ProjectsTabs = ({ projectsApiElements, latestProjectsHeader }) => {
  const sortedProjectsList = [...projectsApiElements].sort(compareProjectsOrder);

  const homepageProjects = sortedProjectsList
    .filter((element) => element.fields.showOnHomepage === true)
    .slice(0, 3);

  const projectsData = getProjectsData(homepageProjects);

  return (
    <StyledTabs>
      <ResponsiveHeader>{latestProjectsHeader}</ResponsiveHeader>
      <StyledTabList>
        {projectsData.map(({ title }) => (
          <StyledTab key={title}>
            <ResponsiveButton className="tab-button">{title}</ResponsiveButton>
          </StyledTab>
        ))}
      </StyledTabList>

      {projectsData.map(
        ({ title, date, description, linkUrl, linkCaption, videoUrl, imageUrl }) => (
          <>
            <StyledTabPanel key={title}>
              {videoUrl ? (
                <VideoResponsive>
                  <StyledVideo
                    key={videoUrl}
                    title={title}
                    height="579px"
                    src={`${videoUrl.replace('watch?v=', 'embed/')}?rel=0&showinfo=0&autohide=1`}
                    allow="fullscreen"
                  />
                </VideoResponsive>
              ) : (
                <StyledImage
                  key={imageUrl}
                  width="997px"
                  height="579px"
                  alt={title}
                  src={imageUrl}
                />
              )}
              <StyledTabTextSection>
                <TitleWithDateContainer>
                  <ProjectTitle>{title}</ProjectTitle>
                  <ProjectDate>{date}</ProjectDate>
                </TitleWithDateContainer>
                <ProjectDescription>{description}</ProjectDescription>
                {linkUrl && (
                  <ButtonWrapper>
                    <a href={linkUrl}>
                      <SmallButton icon={linkUrl.includes('facebook')}>
                        {linkUrl.includes('facebook') && <FacebookIcon />}
                        {linkCaption || 'Zobacz więcej'}
                      </SmallButton>
                    </a>
                  </ButtonWrapper>
                )}
              </StyledTabTextSection>
            </StyledTabPanel>
          </>
        ),
      )}
      <a href="/projekty">
        <SeeProjectsButton>Zobacz wszystkie projekty</SeeProjectsButton>
      </a>
    </StyledTabs>
  );
};

ProjectsTabs.propTypes = {
  projectsApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
  latestProjectsHeader: PropTypes.string.isRequired,
};

export default ProjectsTabs;
