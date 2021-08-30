import PropTypes from 'prop-types';
import contentfulClient from '@root/api/contentfulClient';
import Header from '@root/components/Homepage/Header/Header';
import getSocialMedias from '@root/handlers/getSocialMedias';
import findApiElementByIdentifier from '@root/handlers/findApiElement';
import ProjectsTabs from '@root/components/Homepage/ProjectsTabs/ProjectsTabs';
import ValuesSection from '@root/components/Homepage/ValuesSection/ValuesSection';

const Home = ({ homeApiElements, commonApiElements, projectsApiElements }) => {
  const homeTopSection = findApiElementByIdentifier(homeApiElements, 'homepage-top-section');
  const latestProjectsHeader = findApiElementByIdentifier(
    homeApiElements,
    'homepage-projects-title',
  ).fields.title;
  const topSectionVideoUrl = homeTopSection.fields.image1.fields.file.url;
  const socialMedias = getSocialMedias(commonApiElements);
  const valuesHeader = findApiElementByIdentifier(homeApiElements, 'homepage-values').fields;

  const firstTile = findApiElementByIdentifier(homeApiElements, 'homepage-tile-1');
  const secondTile = findApiElementByIdentifier(homeApiElements, 'homepage-tile-2');
  const thirdTile = findApiElementByIdentifier(homeApiElements, 'homepage-tile-3');

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
      <ValuesSection valuesHeader={valuesHeader} valuesTiles={[firstTile, secondTile, thirdTile]} />
      <ProjectsTabs
        projectsApiElements={projectsApiElements}
        latestProjectsHeader={latestProjectsHeader}
      />
    </>
  );
};

export const getStaticProps = async () => {
  const homeApiElements = await contentfulClient.getBasicContent('homepage');
  const commonApiElements = await contentfulClient.getBasicContent('common');
  const projectsApiElements = await contentfulClient.getProjects();

  return {
    props: {
      homeApiElements,
      commonApiElements,
      projectsApiElements,
    },
  };
};

Home.propTypes = {
  homeApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
  commonApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
  projectsApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Home;
