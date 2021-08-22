import PropTypes from 'prop-types';
import fetchContentfulApi from '@root/api/ContentfulClient';
import Header from '@root/components/Homepage/Header/Header';
import getSocialMedias from '@root/handlers/getSocialMedias';

import { findApiElementByIdentifier, findAssetByTitle } from '@root/handlers/findApiElement';

const Home = ({ homeApiElements, homeApiAssets, commonApiElements }) => {
  const homeTopSection = findApiElementByIdentifier(homeApiElements, 'homepage-top-section');
  const topSectionVideoUrl = findAssetByTitle(homeApiAssets, 'na strone ikss').fields.file.url;
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
        headerTitle={title}
        text={topSectionBodyText}
        video={topSectionVideoUrl}
        socialMedias={socialMedias}
        
      />
    </>
  );
};

export const getStaticProps = async () => {
  const homeApiElements = await fetchContentfulApi.getBasicContent('homepage');
  const homeApiAssets = await fetchContentfulApi.getBasicContentAssets('homepage');
  const commonApiElements = await fetchContentfulApi.getBasicContent('common');
  return {
    props: {
      homeApiElements,
      homeApiAssets,
      commonApiElements,
    },
  };
};

Home.propTypes = {
  homeApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
  commonApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
  homeApiAssets: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Home;
