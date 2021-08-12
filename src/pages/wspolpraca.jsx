import PropTypes from 'prop-types';

const Cooperation = ({ cooperationApiElements }) => {
  console.log(cooperationApiElements);
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
      cooperationApiElements: allApiElements.items.filter(
        (element) => element.fields.page === 'cooperation',
      ),
    },
  };
};

Cooperation.propTypes = {
  cooperationApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Cooperation;
