/* eslint-disable react/jsx-props-no-spreading */
import 'react-tabs/style/react-tabs.css';
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
      description: project.fields.description.content[0].content[0].value,
      linkUrl: project.fields.linkUrl,
      linkCaption: project.fields.linkCaption,
      videoUrl: project.fields.videoUrl,
      imageUrl,
    });
  });

  console.log(projectsApiElements);
  console.log(projectsApiAssets);
  console.log(homepageProjects);
  console.log(projectsData);

  return (
    <StyledTabs>
      <H3>{latestProjectsHeader}</H3>
      <StyledTabList>
        {projectsData.map((project) => (
          <StyledTab key={project.title}>
            <BigButton className="tab-button">{project.title}</BigButton>
          </StyledTab>
        ))}
      </StyledTabList>

      {projectsData.map((project) => (
        <>
          <StyledTabPanel key={project.title}>
            {project.videoUrl ? (
              <>
                <StyledVideo
                  key={project.videoUrl}
                  title={project.title}
                  width="100%"
                  height="579"
                  src={project.videoUrl.replace('watch?v=', 'embed/')}
                />
              </>
            ) : (
              <StyledImage
                key={project.imageUrl}
                width="997px"
                height="579px"
                alt={project.title}
                src={project.imageUrl}
              />
            )}
            <StyledTabTextSection>
              <TitleWithDateContainer>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDate>{project.date}</ProjectDate>
              </TitleWithDateContainer>
              <ProjectDescription>{project.description}</ProjectDescription>
              {project.linkUrl && (
                <ButtonWrapper>
                  <a href={project.linkUrl} target="_blank" rel="noreferrer">
                    <SmallButton icon={project.linkUrl.includes('facebook')}>
                      {project.linkUrl.includes('facebook') && <FacebookIcon />}
                      {project.linkCaption}
                    </SmallButton>
                  </a>
                </ButtonWrapper>
              )}
            </StyledTabTextSection>
          </StyledTabPanel>
        </>
      ))}
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
