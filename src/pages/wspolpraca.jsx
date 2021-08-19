import PropTypes from 'prop-types';
import fetchContentfulApi from '@root/api/ContentfulClient';
import { findApiElementByIdentifier, findAssetByTitle } from '@root/handlers/findApiElement';
import GenericTopSection from '@root/components/GenericTopSection/GenericTopSection';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Cooperation = ({ cooperationApiElements, cooperationApiAssets, commonApiElements }) => {
  const cooperationTopSection = findApiElementByIdentifier(
    cooperationApiElements,
    'cooperation-top-section',
  );

  const cooperationTopSectionImageUrl = findAssetByTitle(cooperationApiAssets, 'Group 179').fields
    .file.url;
  const cooperationTitle = cooperationTopSection.fields.title;
  const cooperationDescription = documentToReactComponents(cooperationTopSection.fields.text1);
  return (
    <>
      <GenericTopSection
        imageUrl={cooperationTopSectionImageUrl}
        title={cooperationTitle}
        subpageDescription={cooperationDescription}
      />
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
