import PropTypes from 'prop-types';
import fetchContentfulApi from '@root/api/ContentfulClient';
import { findApiElementById, findApiAssetById } from '@root/handlers/findApiElement';
import GenericTopSection from '@root/components/GenericTopSection/GenericTopSection';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import GenericBottomCta from '@root/components/GenericBottomCta/GenericBottomCta';

const AboutUs = ({ aboutUsApiElements, aboutUsApiAssets, commonApiElements }) => {
  const topSection = findApiElementById(aboutUsApiElements, '7VAmFQdFbh856J88hLHWb');
  const topSectionImageUrl = findApiAssetById(aboutUsApiAssets, '4KNO6HfqD80467P9Cis63u').fields
    .file.url;
  const sectionTitle = topSection.fields.title;
  const description = documentToReactComponents(topSection.fields.text1);
  const bottomCta = findApiElementById(aboutUsApiElements, '5F4bW0J6ceu1YMg0qYnRo5').fields;

  return (
    <>
      <GenericTopSection
        imageUrl={topSectionImageUrl}
        title={sectionTitle}
        subpageDescription={description}
      />
      <GenericBottomCta bottomCta={bottomCta} />
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
