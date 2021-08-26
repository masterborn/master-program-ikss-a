/* eslint-disable react/jsx-props-no-spreading */
import 'react-tabs/style/react-tabs.css';
import PropTypes from 'prop-types';
import getProjectsData from '@root/handlers/getProjectsData';
import compareProjectsOrder from '@root/handlers/compareProjectsOrder';
import { FacebookIcon } from '@root/components/icons';
import { BigButton, SmallButton } from '@root/components/Button/Button.styles';
import { H3, H4 } from '@root/components/typography/Typography';
import { useWindowSize } from '@root/hooks/useWindowSize';
import { size } from '@root/styles/theme';
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
  VideoResponsive,
  TabSecondarySmallButton,
} from './ProjectsTabs.styles';

const ProjectsTabs = ({ projectsApiElements, latestProjectsHeader }) => {
  const { windowWidth } = useWindowSize();
  const { small } = size;

  projectsApiElements.sort(compareProjectsOrder);

  const homepageProjects = projectsApiElements.filter(
    (element) => element.fields.showOnHomepage === true,
  );

  const projectsData = getProjectsData(homepageProjects);

  return (
    <StyledTabs>
      {windowWidth > small ? <H3>{latestProjectsHeader}</H3> : <H4>{latestProjectsHeader}</H4>}
      <StyledTabList>
        {projectsData.map(({ title }) => (
          <StyledTab key={title}>
            {windowWidth > small ? (
              <BigButton className="tab-button">{title}</BigButton>
            ) : (
              <SmallButton className="tab-button">{title}</SmallButton>
            )}
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
        {windowWidth > small ? (
          <TabSecondaryBigButton>Zobacz wszystkie projekty</TabSecondaryBigButton>
        ) : (
          <TabSecondarySmallButton>Zobacz wszystkie projekty</TabSecondarySmallButton>
        )}
      </a>
    </StyledTabs>
  );
};

ProjectsTabs.propTypes = {
  projectsApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
  latestProjectsHeader: PropTypes.string.isRequired,
};

export default ProjectsTabs;
