<<<<<<< HEAD
import PrimaryLogo from '@root/components/logos/PrimaryLogo';
import LogoNoBackground from '@root/components/logos/LogoNoBackground';
import LogoBackground from '@root/components/logos/LogoBackground';
import { H1, BodyText } from '@root/components/typography/Typography';
import { getColor } from '@root/styles/utils';
import TopSection from '@root/components/TopSection/TopSection';


const Home = () => (
  <div>
    <PrimaryLogo margin="20px 0 0 120px" height="49px" width="78px" />
    <LogoBackground margin="20px 0 0 120px" height="49px" width="78px" />
    <LogoNoBackground margin="20px 0 0 120px" height="49px" width="78px" />
    <H1 color={getColor('steel')} margin="20px 0 0 40px">
      Example h1 with adjusted color and margin
    </H1>
    <BodyText>Basic body text</BodyText>
    <TopSection title="Przykładowy nagłówek IKSS" text="Urna, mi condimentum amet, consectetur mauris tincidunt gravida aenean. Dignissim in sit arcu nam. Ultrices integer odio feugiat vulputate. "/>
    
  </div>
  
     
);
=======
import PropTypes from 'prop-types';
import fetchApiData from '@root/api/api';
import Header from '@root/components/Homepage/Header';
import getSocialMedias from '@root/handlers/getSocialMedias';
import { findApiElementByIdentifier, findAssetByTitle } from '@root/handlers/findApiElement';

const Home = ({ homeApiElements, homeAssets, commonApiElements }) => {
  const homeTopSection = findApiElementByIdentifier(homeApiElements, 'homepage-top-section');
  const topSectionBodyImageUrl = findAssetByTitle(homeAssets, 'image 1').fields.file.url;
  const socialMedias = getSocialMedias(commonApiElements);
  const {
    fields: {
      text1: { content },
      title,
    },
  } = homeTopSection;

  const [firstSection] = content;
  const topSectionBodyText = firstSection.content[0].value;

  return (
    <>
      <Header
        title={title}
        text={topSectionBodyText}
        image={topSectionBodyImageUrl}
        socialMedias={socialMedias}
      />
    </>
  );
};

export const getStaticProps = async () => {
  const homeApiElements = await fetchApiData('homepage');
  const commonApiElements = await fetchApiData('common');
  return {
    props: {
      homeApiElements: homeApiElements.items,
      homeAssets: homeApiElements.includes.Asset,
      commonApiElements: commonApiElements.items,
    },
  };
};

Home.propTypes = {
  homeApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
  commonApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
  homeAssets: PropTypes.arrayOf(PropTypes.object).isRequired,
};
>>>>>>> cb5a3fe3de5069392e873eacdc0cd598ed4f7e95

export default Home;
