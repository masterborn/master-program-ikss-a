import PropTypes from 'prop-types';
import fetchContentfulApi from '@root/api/ContentfulClient';
import Header from '@root/components/Homepage/Header';
import getSocialMedias from '@root/handlers/getSocialMedias';
import { findApiElementByIdentifier, findAssetByTitle } from '@root/handlers/findApiElement';
import ProjectsTabs from '@root/components/Homepage/ProjectsTabs/ProjectsTabs';

const Home = ({
  homeApiElements,
  homeApiAssets,
  commonApiElements,
  projectsApiAssets,
  projectsApiElements,
}) => {
  const homeTopSection = findApiElementByIdentifier(homeApiElements, 'homepage-top-section');
  const latestProjectsHeader = findApiElementByIdentifier(
    homeApiElements,
    'homepage-projects-title',
  ).fields.title;
  const topSectionBodyImageUrl = findAssetByTitle(homeApiAssets, 'na strone ikss').fields.file.url;

  const socialMedias = getSocialMedias(commonApiElements);
  const {
    fields: {
      text1: { content },
      title,
    },
  } = homeTopSection;

  const [firstSection] = content;
  const topSectionBodyText = firstSection.content[0].value;

  return (
    <>
      <Header
        title={title}
        text={topSectionBodyText}
        image={topSectionBodyImageUrl}
        socialMedias={socialMedias}
      />
      <ProjectsTabs
        projectsApiAssets={projectsApiAssets}
        projectsApiElements={projectsApiElements}
        latestProjectsHeader={latestProjectsHeader}
      />
    </>
  );
};

export const getStaticProps = async () => {
  const homeApiElements = await fetchContentfulApi.getBasicContent('homepage');
  const homeApiAssets = await fetchContentfulApi.getBasicContentAssets('homepage');
  const commonApiElements = await fetchContentfulApi.getBasicContent('common');
  const projectsApiElements = await fetchContentfulApi.getProjects();
  const projectsApiAssets = await fetchContentfulApi.getProjectsAssets();

  return {
    props: {
      homeApiElements,
      homeApiAssets,
      commonApiElements,
      projectsApiElements,
      projectsApiAssets,
    },
  };
};

Home.propTypes = {
  homeApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
  commonApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
  homeApiAssets: PropTypes.arrayOf(PropTypes.object).isRequired,
  projectsApiAssets: PropTypes.arrayOf(PropTypes.object).isRequired,
  projectsApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Home;
