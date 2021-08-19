import PropTypes from 'prop-types';
import fetchContentfulApi from '@root/api/ContentfulClient';
import { findApiElementByIdentifier, findAssetByTitle } from '@root/handlers/findApiElement';
import GenericTopSection from '@root/components/GenericTopSection/GenericTopSection';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const AboutUs = ({ aboutUsApiElements, aboutUsApiAssets, commonApiElements }) => {
  const aboutUsTopSection = findApiElementByIdentifier(aboutUsApiElements, 'about-us-top-section');
  const aboutUsTopSectionImageUrl = findAssetByTitle(aboutUsApiAssets, 'Group 45').fields.file.url;
  const aboutUsTitle = aboutUsTopSection.fields.title;
  const aboutUsDescription = documentToReactComponents(aboutUsTopSection.fields.text1);
  return (
    <>
      <GenericTopSection
        imageUrl={aboutUsTopSectionImageUrl}
        title={aboutUsTitle}
        subpageDescription={aboutUsDescription}
      />
    </>
  );
};

export const getStaticProps = async () => {
  const aboutUsApiElements = await fetchContentfulApi.getBasicContent('about-us');
  const aboutUsApiAssets = await fetchContentfulApi.getBasicContentAssets('about-us');
  const commonApiElements = await fetchContentfulApi.getBasicContent('common');
  return {
    props: {
      aboutUsApiElements,
      aboutUsApiAssets,
      commonApiElements,
    },
  };
};

AboutUs.propTypes = {
  aboutUsApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
  aboutUsApiAssets: PropTypes.arrayOf(PropTypes.object).isRequired,
  commonApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AboutUs;
