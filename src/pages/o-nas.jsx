import PropTypes from 'prop-types';
import fetchContentfulApi from '@root/api/ContentfulClient';

const AboutUs = ({ aboutUsApiElements, aboutUsApiAssets, commonApiElements }) => <div />;

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
