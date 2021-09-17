import PropTypes from 'prop-types';
import Head from 'next/head';
import contentfulClient from '@root/api/contentfulClient';
import findApiElementByIdentifier from '@root/handlers/findApiElement';
import GenericTopSection from '@root/components/GenericTopSection/GenericTopSection';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import GenericBottomCta from '@root/components/GenericBottomCta/GenericBottomCta';
import Tabs from '@root/components/Subpages/Projects/Tabs/Tabs';

const Projects = ({ projectsApiElements, projectsList }) => {
  const topSection = findApiElementByIdentifier(projectsApiElements, 'projects-top-section');
  const bottomCta = findApiElementByIdentifier(
    projectsApiElements,
    'projects-bottom-cta-text',
  ).fields;
  const middleCta = findApiElementByIdentifier(
    projectsApiElements,
    'projects-middle-cta-text',
  ).fields;
  const topSectionImageUrl = topSection.fields.image1.fields.file.url;
  const subpageTitle = topSection.fields.title;
  const subpageDescription = documentToReactComponents(topSection.fields.text1);
  const metaTitleProjects = findApiElementByIdentifier(projectsApiElements, 'projects-meta').fields
    .title;
  const metaDescriptionProjects = findApiElementByIdentifier(projectsApiElements, 'projects-meta')
    .fields.text1;

  return (
    <>
      <Head>
        <title>{metaTitleProjects}</title>
        <meta name="description" content={documentToPlainTextString(metaDescriptionProjects)} />
      </Head>
      <>
        <GenericTopSection
          imageUrl={topSectionImageUrl}
          title={subpageTitle}
          subpageDescription={subpageDescription}
        />
        <Tabs projectsList={projectsList} middleCta={middleCta} />
        <GenericBottomCta bottomCta={bottomCta} />
      </>
    </>
  );
};

export const getStaticProps = async () => {
  const projectsApiElements = await contentfulClient.getBasicContent('projects');
  const projectsList = await contentfulClient.getProjects();

  return {
    props: {
      projectsApiElements,
      projectsList,
    },
  };
};

Projects.propTypes = {
  projectsApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
  projectsList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Projects;
