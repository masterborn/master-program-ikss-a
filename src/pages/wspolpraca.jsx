import PropTypes from 'prop-types';
import contentfulClient from '@root/api/contentfulClient';
import findApiElementByIdentifier from '@root/handlers/findApiElement';
import GenericTopSection from '@root/components/GenericTopSection/GenericTopSection';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import GenericBottomCta from '@root/components/GenericBottomCta/GenericBottomCta';
import BenefitsSection from '@root/components/Subpages/Cooperation/BenefitsSection/BenefitsSection';
import PartnersSection from '@root/components/Subpages/Cooperation/PartnersSection/PartnersSection';

const Cooperation = ({ cooperationApiElements, partnerLogosApiElements }) => {
  const topSection = findApiElementByIdentifier(cooperationApiElements, 'cooperation-top-section');
  const bottomCta = findApiElementByIdentifier(
    cooperationApiElements,
    'cooperation-bottom-cta',
  ).fields;
  const topSectionImageUrl = topSection.fields.image1.fields.file.url;
  const cooperationTitle = topSection.fields.title;
  const description = documentToReactComponents(topSection.fields.text1);
  const benefitsTitle = findApiElementByIdentifier(
    cooperationApiElements,
    'cooperation-tiles-title',
  ).fields.title;
  const benefitsTiles = [
    'cooperation-tile-1',
    'cooperation-tile-2',
    'cooperation-tile-3',
    'cooperation-tile-4',
    'cooperation-tile-5',
  ].map((tile) => findApiElementByIdentifier(cooperationApiElements, tile));

  const logosSection = findApiElementByIdentifier(cooperationApiElements, 'cooperation-logos-text');
  const logosTitle = logosSection.fields.title;
  const logosDescription = documentToReactComponents(logosSection.fields.text1);
  return (
    <>
      <GenericTopSection
        imageUrl={topSectionImageUrl}
        title={cooperationTitle}
        subpageDescription={description}
      />
      <BenefitsSection title={benefitsTitle} benefitsTiles={benefitsTiles} />
      <PartnersSection
        partnersLogos={partnerLogosApiElements}
        sectionTitle={logosTitle}
        sectionDescription={logosDescription}
      />
      <GenericBottomCta bottomCta={bottomCta} />
    </>
  );
};

export const getStaticProps = async () => {
  const cooperationApiElements = await contentfulClient.getBasicContent('cooperation');
  const partnerLogosApiElements = await contentfulClient.getPartnerLogos();

  return {
    props: {
      cooperationApiElements,
      partnerLogosApiElements,
    },
  };
};

Cooperation.propTypes = {
  cooperationApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
  partnerLogosApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Cooperation;
