import PropTypes from 'prop-types';
import fetchContentfulApi from '@root/api/ContentfulClient';
import { findApiElementById, findApiAssetById } from '@root/handlers/findApiElement';
import GenericTopSection from '@root/components/GenericTopSection/GenericTopSection';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import GenericBottomCta from '@root/components/GenericBottomCta/GenericBottomCta';

const Projects = ({ projectsApiElements, projectsApiAssets, projectsAssetsList, projectsList }) => {
  const topSection = findApiElementById(projectsApiElements, '6enfYOcI5KXjAaGsfSNLjd');
  const bottomCta = findApiElementById(projectsApiElements, '6Fg9VlhBAvzwbwNc0MjqVA').fields;
  const topSectionImageUrl = findApiAssetById(projectsApiAssets, 'yH2eNUf6Ph8o9Ijo8hke1').fields
    .file.url;
  const projectsTitle = topSection.fields.title;
  const description = documentToReactComponents(topSection.fields.text1);
  return (
    <>
      <GenericTopSection
        imageUrl={topSectionImageUrl}
        title={projectsTitle}
        subpageDescription={description}
      />
      <GenericBottomCta bottomCta={bottomCta} />
    </>
  );
};

export const getStaticProps = async () => {
  const projectsApiElements = await fetchContentfulApi.getBasicContent('projects');
  const projectsApiAssets = await fetchContentfulApi.getBasicContentAssets('projects');
  const commonApiElements = await fetchContentfulApi.getBasicContent('common');
  const projectsList = await fetchContentfulApi.getProjects();
  const projectsAssetsList = await fetchContentfulApi.getProjectsAssets();
  return {
    props: {
      projectsApiElements,
      projectsApiAssets,
      commonApiElements,
      projectsList,
      projectsAssetsList,
    },
  };
};

Projects.propTypes = {
  projectsApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
  projectsApiAssets: PropTypes.arrayOf(PropTypes.object).isRequired,
  projectsAssetsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  projectsList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Projects;
