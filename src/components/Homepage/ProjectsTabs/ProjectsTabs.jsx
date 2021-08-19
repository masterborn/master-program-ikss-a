/* eslint-disable react/jsx-props-no-spreading */
import 'react-tabs/style/react-tabs.css';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import PropTypes from 'prop-types';
import { FacebookIcon } from '@root/components/icons';
import { BigButton, SmallButton } from '@root/components/Button/Button.styles';
import { H3 } from '@root/components/typography/Typography';
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
  TabSecondaryBigButton,
  ButtonWrapper,
  StyledVideo,
  StyledImage,
} from './ProjectsTabs.styles';

const ProjectsTabs = ({ projectsApiElements, projectsApiAssets, latestProjectsHeader }) => {
  const homepageProjects = [];
  const projectsData = [];

  function compareProjectsOrder(a, b) {
    if (a.fields.order < b.fields.order) {
      return 1;
    }
    if (a.fields.order > b.fields.order) {
      return -1;
    }
    return 0;
  }

  projectsApiElements.sort(compareProjectsOrder);

  for (let i = 0; i < projectsApiElements.length; i += 1) {
    if (
      projectsApiElements[i].fields.showOnHomepage === true &&
      Object.keys(homepageProjects).length < 3
    ) {
      homepageProjects[i] = projectsApiElements[i];
    }
  }

  homepageProjects.forEach((project) => {
    let imageUrl = '';
    projectsApiAssets.forEach((asset) => {
      if (asset.fields.title.toLowerCase() === project.fields.title.toLowerCase()) {
        imageUrl = `https:${asset.fields.file.url}`;
      }
    });
    projectsData.push({
      title: project.fields.title,
      date: project.fields.date,
      description: documentToReactComponents(project.fields.description),
      linkUrl: project.fields.linkUrl,
      linkCaption: project.fields.linkCaption,
      videoUrl: project.fields.videoUrl,
      imageUrl,
    });
  });

  return (
    <StyledTabs>
      <H3>{latestProjectsHeader}</H3>
      <StyledTabList>
        {projectsData.map(({ title }) => (
          <StyledTab key={title}>
            <BigButton className="tab-button">{title}</BigButton>
          </StyledTab>
        ))}
      </StyledTabList>

      {projectsData.map(
        ({ title, date, description, linkUrl, linkCaption, videoUrl, imageUrl }) => (
          <>
            <StyledTabPanel key={title}>
              {videoUrl ? (
                <>
                  <StyledVideo
                    key={videoUrl}
                    title={title}
                    width="100%"
                    height="579"
                    src={`${videoUrl.replace('watch?v=', 'embed/')}?rel=0&showinfo=0&autohide=1`}
                    allow="fullscreen"
                  />
                </>
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
                    <a href={linkUrl} target="_blank" rel="noreferrer">
                      <SmallButton icon={linkUrl.includes('facebook')}>
                        {linkUrl.includes('facebook') && <FacebookIcon />}
                        {linkCaption}
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
        <TabSecondaryBigButton>Zobacz wszystkie projekty</TabSecondaryBigButton>
      </a>
    </StyledTabs>
  );
};

ProjectsTabs.propTypes = {
  projectsApiAssets: PropTypes.arrayOf(PropTypes.object).isRequired,
  projectsApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
  latestProjectsHeader: PropTypes.string.isRequired,
};

export default ProjectsTabs;
