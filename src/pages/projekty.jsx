import PropTypes from 'prop-types';
import fetchContentfulApi from '@root/api/ContentfulClient';
import { findApiElementByIdentifier, findAssetByTitle } from '@root/handlers/findApiElement';
import GenericTopSection from '@root/components/GenericTopSection/GenericTopSection';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Projects = ({ projectsApiElements, projectsApiAssets, commonApiElements }) => {
  const projectsTopSection = findApiElementByIdentifier(
    projectsApiElements,
    'projects-top-section',
  );

  const projectsTopSectionImageUrl = findAssetByTitle(projectsApiAssets, 'Warstwa 1').fields.file
    .url;
  const projectsTitle = projectsTopSection.fields.title;
  const projectsDescription = documentToReactComponents(projectsTopSection.fields.text1);
  return (
    <>
      <GenericTopSection
        imageUrl={projectsTopSectionImageUrl}
        title={projectsTitle}
        subpageDescription={projectsDescription}
      />
    </>
  );
};

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
