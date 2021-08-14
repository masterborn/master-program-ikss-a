import PropTypes from 'prop-types';
import fetchApiData from '@root/api/api';

const Projects = ({ projectsApiElements, projectsAssets, commonApiElements }) => <div />;

export const getStaticProps = async () => {
  const projectsApiElements = await fetchApiData('about-us');
  const commonApiElements = await fetchApiData('common');
  return {
    props: {
      projectsApiElements: projectsApiElements.items,
      projectsAssets: projectsApiElements.includes.Asset,
      commonApiElements: commonApiElements.items,
    },
  };
};

Projects.propTypes = {
  projectsApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
  projectsAssets: PropTypes.arrayOf(PropTypes.object).isRequired,
  commonApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Projects;
