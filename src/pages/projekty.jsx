import PropTypes from 'prop-types';
import contentfulClient from '@root/api/contentfulClient';
import findApiElementByIdentifier from '@root/handlers/findApiElement';
import GenericTopSection from '@root/components/GenericTopSection/GenericTopSection';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import GenericBottomCta from '@root/components/GenericBottomCta/GenericBottomCta';

const Projects = ({ projectsApiElements }) => {
  const topSection = findApiElementByIdentifier(projectsApiElements, 'projects-top-section');
  const bottomCta = findApiElementByIdentifier(
    projectsApiElements,
    'projects-bottom-cta-text',
  ).fields;
  const topSectionImageUrl = topSection.fields.image1.fields.file.url;
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
  return {
    props: {
      projectsApiElements,
    },
  };
};

Projects.propTypes = {
  projectsApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Projects;
