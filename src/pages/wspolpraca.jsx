import PropTypes from 'prop-types';
import fetchApiData from '@root/api/api';

const Cooperation = ({ cooperationApiElements, cooperationAssets, commonApiElements }) => <div />;

export const getStaticProps = async () => {
  const cooperationApiElements = await fetchApiData('about-us');
  const commonApiElements = await fetchApiData('common');
  return {
    props: {
      cooperationApiElements: cooperationApiElements.items,
      cooperationAssets: cooperationApiElements.includes.Asset,
      commonApiElements: commonApiElements.items,
    },
  };
};

Cooperation.propTypes = {
  cooperationApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
  cooperationAssets: PropTypes.arrayOf(PropTypes.object).isRequired,
  commonApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Cooperation;
