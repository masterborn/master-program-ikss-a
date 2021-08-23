import PropTypes from 'prop-types';
import fetchContentfulApi from '@root/api/ContentfulClient';
import { findApiElementByIdentifier, findAssetByTitle } from '@root/handlers/findApiElement';
import GenericTopSection from '@root/components/GenericTopSection/GenericTopSection';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import GenericBottomCta from '@root/components/GenericBottomCta/GenericBottomCta';

const AboutUs = ({ aboutUsApiElements, aboutUsApiAssets }) => {
  const topSection = findApiElementByIdentifier(aboutUsApiElements, 'about-us-top-section');
  const topSectionImageUrl = findAssetByTitle(aboutUsApiAssets, 'Group 45').fields.file.url;
  const subpageTitle = topSection.fields.title;
  const subpageDescription = documentToReactComponents(topSection.fields.text1);
  const bottomCta = findApiElementByIdentifier(aboutUsApiElements, 'about-us-bottom-cta').fields;

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
  const aboutUsApiElements = await fetchContentfulApi.getBasicContent('about-us');
  const aboutUsApiAssets = await fetchContentfulApi.getBasicContentAssets('about-us');
  return {
    props: {
      aboutUsApiElements,
      aboutUsApiAssets,
    },
  };
};

AboutUs.propTypes = {
  aboutUsApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
  aboutUsApiAssets: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AboutUs;
