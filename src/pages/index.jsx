/* eslint-disable import/no-unresolved */
import PropTypes from 'prop-types';
import fetchContentfulApi from '@root/api/ContentfulClient';
import Header from '@root/components/Homepage/Header/Header';
import getSocialMedias from '@root/handlers/getSocialMedias';

import { findApiElementByIdentifier, findAssetByTitle } from '@root/handlers/findApiElement';
import ProjectsTabs from '@root/components/Homepage/ProjectsTabs/ProjectsTabs';
import ValuesSection from '@root/components/Homepage/ValuesSection/ValuesSection';
import LogosSection from '@root/components/Homepage/LogosSection/LogosSection';

const Home = ({
  homeApiElements,
  homeApiAssets,
  commonApiElements,
  projectsApiAssets,
  projectsApiElements,
}) => {
  const latestProjectsHeader = findApiElementByIdentifier(homeApiElements, 'homepage-projects-title').fields.title;
  const homeTopSection = findApiElementByIdentifier(homeApiElements, 'homepage-top-section');
  const topSectionVideoUrl = findAssetByTitle(homeApiAssets, 'na strone ikss').fields.file.url;
  const socialMedias = getSocialMedias(commonApiElements);
  const valuesHeader = findApiElementByIdentifier(homeApiElements, 'homepage-values').fields;
  const firstTile = findApiElementByIdentifier(homeApiElements, 'homepage-tile-1');
  const secondTile = findApiElementByIdentifier(homeApiElements, 'homepage-tile-2');
  const thirdTile = findApiElementByIdentifier(homeApiElements, 'homepage-tile-3');
  const logosHeader = findApiElementByIdentifier(homeApiElements, 'homepage-partners-text').fields.title;
  const logosText= findApiElementByIdentifier(homeApiElements, 'homepage-partners-text').fields.text1.content.value; 
  

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
       <LogosSection
        logosHeader={logosHeader}
        logosText={logosText}
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
