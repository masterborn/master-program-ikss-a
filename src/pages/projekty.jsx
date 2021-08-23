import PropTypes from 'prop-types';
import contentfulClient from '@root/api/contentfulClient';
import { findApiElementByIdentifier, findAssetByTitle } from '@root/handlers/findApiElement';
import GenericTopSection from '@root/components/GenericTopSection/GenericTopSection';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import GenericBottomCta from '@root/components/GenericBottomCta/GenericBottomCta';

const Projects = ({ projectsApiElements, projectsApiAssets }) => {
  const topSection = findApiElementByIdentifier(projectsApiElements, 'projects-top-section');
  const bottomCta = findApiElementByIdentifier(
    projectsApiElements,
    'projects-bottom-cta-text',
  ).fields;
  const topSectionImageUrl = findAssetByTitle(projectsApiAssets, 'Warstwa 1').fields.file.url;
  const subpageTitle = topSection.fields.title;
  const subpageDescription = documentToReactComponents(topSection.fields.text1);
  return (
    <>
      <GenericTopSection
        imageUrl={topSectionImageUrl}
        title={subpageTitle}
        subpageDescription={subpageDescription}
      />
      <GenericBottomCta bottomCta={bottomCta} />
    </>
  );
};

export const getStaticProps = async () => {
  const projectsApiElements = await contentfulClient.getBasicContent('projects');
  const projectsApiAssets = await contentfulClient.getBasicContentAssets('projects');
  return {
    props: {
      projectsApiElements,
      projectsApiAssets,
    },
  };
};

Projects.propTypes = {
  projectsApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
  projectsApiAssets: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Projects;
