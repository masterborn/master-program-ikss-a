import PropTypes from 'prop-types';
import Header from '@root/components/Homepage/Header';

const Home = ({ homeApiElements, commonApiElements }) => {
  const homeTopSection = homeApiElements.find(
    (element) => element.fields.identifier === 'homepage-top-section',
  );
  const socialPages = commonApiElements.filter((element) => element.fields.linkUrl !== undefined);

  const facebook = socialPages.find((element) => element.fields.identifier === 'social-facebook');
  const instagram = socialPages.find((element) => element.fields.identifier === 'social-instagram');
  const youtube = socialPages.find((element) => element.fields.identifier === 'social-youtube');
  const linkedin = socialPages.find((element) => element.fields.identifier === 'social-linkedin');

  const socialLinks = {
    facebookUrl: facebook.fields.linkUrl,
    instagramUrl: instagram.fields.linkUrl,
    youtubeUrl: youtube.fields.linkUrl,
    linkedinUrl: linkedin.fields.linkUrl,
  };

  const {
    fields: {
      image1,
      text1: { content },
      title,
    },
  } = homeTopSection;

  const [firstSection] = content;
  const topSectionBodyText = firstSection.content[0].value;
  const topSectionBodyImage = image1.fields.file.url;

  return (
    <>
      <Header
        title={title}
        text={topSectionBodyText}
        image={topSectionBodyImage}
        socialLinks={socialLinks}
      />
    </>
  );
};

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export const getStaticProps = async () => {
  const allApiElements = await client.getEntries();
  return {
    props: {
      homeApiElements: allApiElements.items.filter((element) => element.fields.page === 'homepage'),
      commonApiElements: allApiElements.items.filter((element) => element.fields.page === 'common'),
    },
  };
};

Home.propTypes = {
  homeApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
  commonApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Home;
