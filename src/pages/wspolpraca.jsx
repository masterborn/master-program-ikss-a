import PropTypes from 'prop-types';
import contentfulClient from '@root/api/contentfulClient';
import findApiElementByIdentifier from '@root/handlers/findApiElement';
import GenericTopSection from '@root/components/GenericTopSection/GenericTopSection';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import GenericBottomCta from '@root/components/GenericBottomCta/GenericBottomCta';

const Cooperation = ({ cooperationApiElements }) => {
  const topSection = findApiElementByIdentifier(cooperationApiElements, 'cooperation-top-section');
  const bottomCta = findApiElementByIdentifier(
    cooperationApiElements,
    'cooperation-bottom-cta',
  ).fields;
  const topSectionImageUrl = topSection.fields.image1.fields.file.url;
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
  const cooperationApiElements = await contentfulClient.getBasicContent('cooperation');

  return {
    props: {
      cooperationApiElements,
    },
  };
};

Cooperation.propTypes = {
  cooperationApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Cooperation;
