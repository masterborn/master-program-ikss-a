/* eslint-disable react/jsx-props-no-spreading */
import 'react-tabs/style/react-tabs.css';
import Link from 'next/link';
import PropTypes from 'prop-types';

import { SmallButton } from '@root/components/Button/Button.styles';
import { FacebookIcon } from '@root/components/icons';
import compareProjectsOrder from '@root/handlers/compareProjectsOrder';
import getProjectsData from '@root/handlers/getProjectsData';

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
  Wrapper,
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
          <Wrapper key={title} role="tooltip" aria-label="Video showing IKSS projects">
            <StyledTabPanel>
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
                <StyledImage key={imageUrl} alt={title} src={imageUrl} role="presentation" />
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
          </Wrapper>
        )
      )}
      <Link href="/projekty">
        <SeeProjectsButton>Zobacz wszystkie projekty</SeeProjectsButton>
      </Link>
    </StyledTabs>
  );
};

ProjectsTabs.propTypes = {
  projectsApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
  latestProjectsHeader: PropTypes.string.isRequired,
};

export default ProjectsTabs;
