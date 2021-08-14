import PropTypes from 'prop-types';
import fetchApiData from '@root/api/api';
import Header from '@root/components/Homepage/Header';
import { findApiElementByIdentifier, findAssetByTitle } from '@root/api/findApiElement';

const Home = ({ homeApiElements, homeAssets, commonApiElements }) => {
  const homeTopSection = findApiElementByIdentifier(homeApiElements, 'homepage-top-section');
  const socialPages = commonApiElements.filter((element) => element.fields.linkUrl !== undefined);
  const topSectionBodyImageUrl = findAssetByTitle(homeAssets, 'image 1').fields.file.url;
  const hasLinkInProperties = socialPages
    // eslint-disable-next-line no-prototype-builtins
    .map((entry) => entry.fields.hasOwnProperty('linkUrl'))
    .every((e) => e === true);
  const socialLinks = hasLinkInProperties
    ? {
        facebookUrl: findApiElementByIdentifier(socialPages, 'social-facebook').fields.linkUrl,
        instagramUrl: findApiElementByIdentifier(socialPages, 'social-instagram').fields.linkUrl,
        youtubeUrl: findApiElementByIdentifier(socialPages, 'social-youtube').fields.linkUrl,
        linkedinUrl: findApiElementByIdentifier(socialPages, 'social-linkedin').fields.linkUrl,
      }
    : null;

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
        socialLinks={socialLinks}
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
