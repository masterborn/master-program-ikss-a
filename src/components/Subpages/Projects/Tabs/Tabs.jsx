import 'react-tabs/style/react-tabs.css';
import getProjectsData from '@root/handlers/getProjectsData';
import compareProjectsOrder from '@root/handlers/compareProjectsOrder';
import PropTypes from 'prop-types';
import getOccurrence from '@root/handlers/getOccurrence';
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
  ButtonWrapper,
  StyledImage,
  ProjectWrapper,
  SimiliarProject,
  StyledBigButton,
} from './Tabs.styles';

const Tabs = ({ projectsList, middleCta }) => {
  projectsList.sort(compareProjectsOrder);
  const projectsData = getProjectsData(projectsList);

  const academicProjectsYears = projectsData.map((project) => {
    if (parseInt(project.date.slice(5, 7), 10) > 9) {
      return project.date.slice(0, 4);
    }
    return (parseInt(project.date.slice(0, 4), 10) - 1).toString();
  });

  const uniqueProjectsYears = [...new Set(academicProjectsYears.sort().reverse())].slice(0, 3);

  const howManyProjectsRendered = {
    [uniqueProjectsYears[0]]: 0,
    [uniqueProjectsYears[1]]: 0,
    [uniqueProjectsYears[2]]: 0,
  };

  const howManyProjectsByAcademicYear = {
    [uniqueProjectsYears[0]]: getOccurrence(academicProjectsYears, uniqueProjectsYears[0]),
    [uniqueProjectsYears[1]]: getOccurrence(academicProjectsYears, uniqueProjectsYears[1]),
    [uniqueProjectsYears[2]]: getOccurrence(academicProjectsYears, uniqueProjectsYears[2]),
  };

  return (
    <>
      <StyledTabs>
        <StyledTabList>
          {uniqueProjectsYears.map((year) => (
            <StyledTab>
              <BigButton className="tab-button">{`${year}/${parseInt(year, 10) + 1}`}</BigButton>
            </StyledTab>
          ))}
        </StyledTabList>
        {uniqueProjectsYears.map((year) => (
          <>
            <StyledTabPanel>
              {projectsData.map(
                // eslint-disable-next-line no-return-assign
                ({ title, date, description, linkUrl, linkCaption, imageUrl }) =>
                  ((date.slice(0, 4) === year && parseInt(date.slice(5, 7), 10) > 9) ||
                    (parseInt(date.slice(0, 4), 10) === parseInt(year, 10) + 1 &&
                      parseInt(date.slice(5, 7), 10) < 10)) &&
                  (howManyProjectsRendered[year] += 1) && (
                    <>
                      <ProjectWrapper>
                        <StyledImage
                          key={imageUrl}
                          width="997px"
                          height="579px"
                          alt={title}
                          src={imageUrl}
                        />
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
                      {howManyProjectsRendered[year] === 4 &&
                        howManyProjectsByAcademicYear[year] !== 4 && (
                          <SimiliarProject>
                            <H3>{middleCta.title}</H3>
                            <StyledBigButton>{middleCta.linkCaption}</StyledBigButton>
                          </SimiliarProject>
                        )}
                    </>
                  ),
              )}
            </StyledTabPanel>
          </>
        ))}
      </StyledTabs>
    </>
  );
};

Tabs.propTypes = {
  projectsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  middleCta: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Tabs;
