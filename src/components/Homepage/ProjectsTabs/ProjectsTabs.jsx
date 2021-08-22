import 'react-tabs/style/react-tabs.css';
import PropTypes from 'prop-types';
import pushProjectsData from '@root/handlers/createProjectsData';
import compareProjectsOrder from '@root/handlers/compareProjectsOrder';
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

  projectsApiElements.sort(compareProjectsOrder);

  for (let i = 0; i < projectsApiElements.length; i += 1) {
    if (
      projectsApiElements[i].fields.showOnHomepage === true &&
      Object.keys(homepageProjects).length < 3
    ) {
      homepageProjects[i] = projectsApiElements[i];
    }
  }

  pushProjectsData(homepageProjects, projectsApiAssets, projectsData);

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
                    frameBorder="0"
                    allow="accelerometer; 
                    autoplay; 
                    clipboard-write; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture"
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
