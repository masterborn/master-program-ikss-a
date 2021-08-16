import PropTypes from 'prop-types';
import fetchContentfulApi from '@root/api/ContentfulClient';

const Projects = ({ projectsApiElements, projectsApiAssets, commonApiElements }) => <div />;

export const getStaticProps = async () => {
  const projectsApiElements = await fetchContentfulApi.getBasicContent('projects');
  const projectsApiAssets = await fetchContentfulApi.getBasicContentAssets('projects');
  const commonApiElements = await fetchContentfulApi.getBasicContent('common');

  return {
    props: {
      projectsApiElements,
      projectsApiAssets,
      commonApiElements,
    },
  };
};

Projects.propTypes = {
  projectsApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
  projectsApiAssets: PropTypes.arrayOf(PropTypes.object).isRequired,
  commonApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Projects;
