import PropTypes from 'prop-types';

const AboutUs = ({ aboutUsApiElements }) => {
  console.log(aboutUsApiElements);
  return <div />;
};

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export const getStaticProps = async () => {
  const allApiElements = await client.getEntries();
  return {
    props: {
      aboutUsApiElements: allApiElements.items.filter(
        (element) => element.fields.page === 'about-us',
      ),
    },
  };
};

AboutUs.propTypes = {
  aboutUsApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AboutUs;
