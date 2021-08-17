import PropTypes from 'prop-types';
import fetchContentfulApi from '@root/api/ContentfulClient';

const Cooperation = ({ cooperationApiElements, cooperationApiAssets, commonApiElements }) => (
  <div />
);

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
