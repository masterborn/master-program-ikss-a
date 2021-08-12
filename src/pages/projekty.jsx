import PropTypes from 'prop-types';

const Projects = ({ projectsApiElements }) => {
  console.log(projectsApiElements);
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
      projectsApiElements: allApiElements.items.filter(
        (element) => element.fields.page === 'projects',
      ),
    },
  };
};

Projects.propTypes = {
  projectsApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Projects;
