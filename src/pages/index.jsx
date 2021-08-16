import PropTypes from 'prop-types';
import fetchApiData from '@root/api/api';
import Header from '@root/components/Homepage/Header';
import getSocialMedias from '@root/handlers/getSocialMedias';
import { findApiElementByIdentifier, findAssetByTitle } from '@root/handlers/findApiElement';

const Home = ({ homeApiElements, homeAssets, commonApiElements }) => {
  const homeTopSection = findApiElementByIdentifier(homeApiElements, 'homepage-top-section');
  const topSectionBodyImageUrl = findAssetByTitle(homeAssets, 'image 1').fields.file.url;
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
    </>
  );
};

export const getStaticProps = async () => {
  const homeApiElements = await fetchApiData('homepage');
  const commonApiElements = await fetchApiData('common');
  return {
    props: {
      homeApiElements: homeApiElements.items,
      homeAssets: homeApiElements.includes.Asset,
      commonApiElements: commonApiElements.items,
    },
  };
};

Home.propTypes = {
  homeApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
  commonApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
  homeAssets: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Home;
