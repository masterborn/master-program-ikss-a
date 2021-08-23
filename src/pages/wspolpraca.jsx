import PropTypes from 'prop-types';
import fetchContentfulApi from '@root/api/ContentfulClient';
import { findApiElementByIdentifier, findAssetByTitle } from '@root/handlers/findApiElement';
import GenericTopSection from '@root/components/GenericTopSection/GenericTopSection';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import GenericBottomCta from '@root/components/GenericBottomCta/GenericBottomCta';

const Cooperation = ({ cooperationApiElements, cooperationApiAssets }) => {
  const topSection = findApiElementByIdentifier(cooperationApiElements, 'cooperation-top-section');
  const bottomCta = findApiElementByIdentifier(
    cooperationApiElements,
    'cooperation-bottom-cta',
  ).fields;
  const topSectionImageUrl = findAssetByTitle(cooperationApiAssets, 'Group 179').fields.file.url;
  const cooperationTitle = topSection.fields.title;
  const description = documentToReactComponents(topSection.fields.text1);
  return (
    <>
      <GenericTopSection
        imageUrl={topSectionImageUrl}
        title={cooperationTitle}
        subpageDescription={description}
      />
      <GenericBottomCta bottomCta={bottomCta} />
    </>
  );
};

export const getStaticProps = async () => {
  const cooperationApiElements = await fetchContentfulApi.getBasicContent('cooperation');
  const cooperationApiAssets = await fetchContentfulApi.getBasicContentAssets('cooperation');

  return {
    props: {
      cooperationApiElements,
      cooperationApiAssets,
    },
  };
};

Cooperation.propTypes = {
  cooperationApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
  cooperationApiAssets: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Cooperation;
