import 'react-tabs/style/react-tabs.css';
import getProjectsData from '@root/handlers/getProjectsData';
import compareProjectsOrder from '@root/handlers/compareProjectsOrder';
import PropTypes from 'prop-types';
import {
  StyledTabs,
  StyledTab,
  StyledTabList,
  StyledTabPanel,
  FirstProjectsSection,
  SecondProjectsSection,
  ResponsiveButton,
} from './Tabs.styles';
import ProjectTile from './ProjectTile';
import Cta from './Cta';

const Tabs = ({ projectsList, middleCta }) => {
  const sortedProjectsList = [...projectsList].sort(compareProjectsOrder);
  const projectsData = getProjectsData(sortedProjectsList);

  const projectsYears = projectsData.map((project) => project.date.slice(0, 4));

  const uniqueProjectsYears = [...new Set(projectsYears.sort().reverse())].slice(0, 3);

  const projectsByYear = {};

  for (let i = 0; i < uniqueProjectsYears.length; i += 1) {
    projectsByYear[uniqueProjectsYears[i]] = projectsData.filter(
      (project) => project.date.slice(0, 4) === uniqueProjectsYears[i],
    );
  }

  return (
    <StyledTabs>
      <StyledTabList>
        {uniqueProjectsYears.map((year) => (
          <StyledTab>
            <ResponsiveButton className="tab-button">{year}</ResponsiveButton>
          </StyledTab>
        ))}
      </StyledTabList>
      {uniqueProjectsYears.map((year) => (
        <>
          <StyledTabPanel>
            <FirstProjectsSection oneProject={projectsByYear[year].length === 1}>
              {projectsByYear[year].slice(0, 4).map((project) => (
                <ProjectTile projectData={project} />
              ))}
            </FirstProjectsSection>

            {projectsByYear[year].length >= 3 && <Cta middleCta={middleCta} />}
            <SecondProjectsSection oneProject={projectsByYear[year].length === 5}>
              {projectsByYear[year].slice(4).map((project) => (
                <ProjectTile projectData={project} />
              ))}
            </SecondProjectsSection>
          </StyledTabPanel>
        </>
      ))}
    </StyledTabs>
  );
};

Tabs.propTypes = {
  projectsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  middleCta: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Tabs;
