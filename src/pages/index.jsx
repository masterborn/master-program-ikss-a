/* eslint-disable import/no-unresolved */
import PropTypes from 'prop-types';
import contentfulClient from '@root/api/contentfulClient';
import Header from '@root/components/Homepage/Header/Header';
import getSocialMedias from '@root/handlers/getSocialMedias';
import findApiElementByIdentifier from '@root/handlers/findApiElement';
import ProjectsTabs from '@root/components/Homepage/ProjectsTabs/ProjectsTabs';
import ValuesSection from '@root/components/Homepage/ValuesSection/ValuesSection';
import LogosSection from '@root/components/Homepage/LogosSection/LogosSection';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Home = ({
  homeApiElements,
  commonApiElements,
  projectsApiElements,
  partnerLogosApiElements,
}) => {
  const homeTopSection = findApiElementByIdentifier(homeApiElements, 'homepage-top-section');
  const latestProjectsHeader = findApiElementByIdentifier(
    homeApiElements,
    'homepage-projects-title',
  ).fields.title;
  const topSectionVideoUrl = homeTopSection.fields.image1.fields.file.url;
  const socialMedias = getSocialMedias(commonApiElements);

  const valuesHeader = findApiElementByIdentifier(homeApiElements, 'homepage-values').fields;
  const valuesTiles = ['homepage-tile-1', 'homepage-tile-2', 'homepage-tile-3'].map(tile => findApiElementByIdentifier(homeApiElements, tile));

  const logosHeader = findApiElementByIdentifier(homeApiElements, 'homepage-partners-text').fields
    .title;
  const logosText = documentToReactComponents(
    findApiElementByIdentifier(homeApiElements, 'homepage-partners-text').fields.text1,
  );

  const {
    fields: {
      text1,
      title,
    },
  } = homeTopSection;

  return (
    <>
      <Header
        headerTitle={title}
        text={text1}
        video={topSectionVideoUrl}
        socialMedias={socialMedias}
      />
      <ValuesSection valuesHeader={valuesHeader} valuesTiles={valuesTiles} />
      <ProjectsTabs
        projectsApiElements={projectsApiElements}
        latestProjectsHeader={latestProjectsHeader}
      />
      <LogosSection
        logosHeader={logosHeader}
        logosText={logosText}
        homeApiElements={homeApiElements}
        partnerLogos={partnerLogosApiElements}
      />
    </>
  );
};

export const getStaticProps = async () => {
  const homeApiElements = await contentfulClient.getBasicContent('homepage');
  const commonApiElements = await contentfulClient.getBasicContent('common');
  const projectsApiElements = await contentfulClient.getProjects();
  const partnerLogosApiElements = await contentfulClient.getPartnerLogos();

  return {
    props: {
      homeApiElements,
      commonApiElements,
      projectsApiElements,
      partnerLogosApiElements,
    },
  };
};

Home.propTypes = {
  homeApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
  commonApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
  projectsApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
  partnerLogosApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Home;
