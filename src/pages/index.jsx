import PropTypes from 'prop-types';
import fetchContentfulApi from '@root/api/ContentfulClient';
import Header from '@root/components/Homepage/Header/Header';
import getSocialMedias from '@root/handlers/getSocialMedias';
import { findApiElementById, findApiAssetById } from '@root/handlers/findApiElement';
import ProjectsTabs from '@root/components/Homepage/ProjectsTabs/ProjectsTabs';
import ValuesSection from '@root/components/Homepage/ValuesSection/ValuesSection';

const Home = ({
  homeApiElements,
  homeApiAssets,
  commonApiElements,
  projectsApiAssets,
  projectsApiElements,
}) => {
  const homeTopSection = findApiElementById(homeApiElements, '1X1gLNzfpSkhRQtWfWscJ8');
  const latestProjectsHeader = findApiElementById(homeApiElements, '1eYuiUKWWtSEFUirofk5EX').fields
    .title;
  const topSectionVideoUrl = findApiAssetById(homeApiAssets, '4fPIBredtzYNienv1X0MSk').fields.file
    .url;
  const socialMedias = getSocialMedias(commonApiElements);
  const valuesHeader = findApiElementById(homeApiElements, '3rCxnIQDqMvFA1gEAuypMM').fields;
  const firstTile = findApiElementById(homeApiElements, '2TyrLz8qxG5ehklou1Aeu9');
  const secondTile = findApiElementById(homeApiElements, '6mn9XmULxQHqXcsshOg2xo');
  const thirdTile = findApiElementById(homeApiElements, '58WFaSdZL4CcpO8zTJRO7E');

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
        headerTitle={title}
        text={topSectionBodyText}
        video={topSectionVideoUrl}
        socialMedias={socialMedias}
      />
      <ValuesSection
        valuesHeader={valuesHeader}
        valuesAssets={homeApiAssets.slice(1, 4)}
        valuesTiles={[firstTile, secondTile, thirdTile]}
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
