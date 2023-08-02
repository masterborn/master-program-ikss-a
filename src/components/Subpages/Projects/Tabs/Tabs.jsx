import 'react-tabs/style/react-tabs.css';
import PropTypes from 'prop-types';

import compareProjectsOrder from '@root/handlers/compareProjectsOrder';
import getProjectsData from '@root/handlers/getProjectsData';

import Cta from './Cta';
import ProjectTile from './ProjectTile';
import {
  StyledTabs,
  StyledTab,
  StyledTabList,
  StyledTabPanel,
  FirstProjectsSection,
  SecondProjectsSection,
  ResponsiveButton,
  Wrapper,
} from './Tabs.styles';

const Tabs = ({ projectsList, middleCta }) => {
  const sortedProjectsList = [...projectsList].sort(compareProjectsOrder);
  const projectsData = getProjectsData(sortedProjectsList);

  const projectsYears = projectsData.map((project) => project.date.slice(0, 4));

  const uniqueProjectsYears = [...new Set(projectsYears.sort().reverse())].slice(0, 3);

  const projectsByYear = {};

  for (let i = 0; i < uniqueProjectsYears.length; i += 1) {
    projectsByYear[uniqueProjectsYears[i]] = projectsData.filter(
      (project) => project.date.slice(0, 4) === uniqueProjectsYears[i]
    );
  }

  return (
    <StyledTabs>
      <StyledTabList>
        {uniqueProjectsYears.map((year) => (
          <StyledTab key={year}>
            <ResponsiveButton className="tab-button">{year}</ResponsiveButton>
          </StyledTab>
        ))}
      </StyledTabList>
      {uniqueProjectsYears.map((year) => (
        <Wrapper key={year}>
          <StyledTabPanel>
            <FirstProjectsSection oneProject={projectsByYear[year].length === 1}>
              {projectsByYear[year].slice(0, 4).map((project) => (
                <ProjectTile projectData={project} key={project.title} />
              ))}
            </FirstProjectsSection>

            {projectsByYear[year].length >= 5 && <Cta middleCta={middleCta} />}
            <SecondProjectsSection oneProject={projectsByYear[year].length === 5}>
              {projectsByYear[year].slice(4).map((project) => (
                <ProjectTile projectData={project} key={project.title} />
              ))}
            </SecondProjectsSection>
          </StyledTabPanel>
        </Wrapper>
      ))}
    </StyledTabs>
  );
};

Tabs.propTypes = {
  projectsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  middleCta: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Tabs;
