import PropTypes from 'prop-types';
import fetchContentfulApi from '@root/api/ContentfulClient';
import { findApiAssetById, findApiElementById } from '@root/handlers/findApiElement';
import GenericTopSection from '@root/components/GenericTopSection/GenericTopSection';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import GenericBottomCta from '@root/components/GenericBottomCta/GenericBottomCta';

const Cooperation = ({ cooperationApiElements, cooperationApiAssets, commonApiElements }) => {
  const topSection = findApiElementById(cooperationApiElements, '36rnMdOGfFdyAiREwfR4ZZ');

  const bottomCtaText = findApiElementById(cooperationApiElements, '5RQeRiT8v9ni2ywUNJr0TF').fields;

  const topSectionImageUrl = findApiAssetById(cooperationApiAssets, '6GuujJk5wpDBBocEfbYyDp').fields
    .file.url;
  const cooperationTitle = topSection.fields.title;
  const description = documentToReactComponents(topSection.fields.text1);
  return (
    <>
      <GenericTopSection
        imageUrl={topSectionImageUrl}
        title={cooperationTitle}
        subpageDescription={description}
      />
      <GenericBottomCta bottomCta={bottomCtaText} />
    </>
  );
};

export const getStaticProps = async () => {
  const cooperationApiElements = await fetchContentfulApi.getBasicContent('cooperation');
  const cooperationApiAssets = await fetchContentfulApi.getBasicContentAssets('cooperation');
  const commonApiElements = await fetchContentfulApi.getBasicContent('common');

  return {
    props: {
      cooperationApiElements,
      cooperationApiAssets,
      commonApiElements,
    },
  };
};

Cooperation.propTypes = {
  cooperationApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
  cooperationApiAssets: PropTypes.arrayOf(PropTypes.object).isRequired,
  commonApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Cooperation;
