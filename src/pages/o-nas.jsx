import PropTypes from 'prop-types';
import fetchApiData from '@root/api/api';

const AboutUs = ({ aboutUsApiElements, aboutUsAssets, commonApiElements }) => <div />;

export const getStaticProps = async () => {
  const aboutUsApiElements = await fetchApiData('about-us');
  const commonApiElements = await fetchApiData('common');
  return {
    props: {
      aboutUsApiElements: aboutUsApiElements.items,
      aboutUsAssets: aboutUsApiElements.includes.Asset,
      commonApiElements: commonApiElements.items,
    },
  };
};

AboutUs.propTypes = {
  aboutUsApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
  aboutUsAssets: PropTypes.arrayOf(PropTypes.object).isRequired,
  commonApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AboutUs;
