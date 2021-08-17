import Image from 'next/image';
import PropTypes from 'prop-types';
import { BodyText, H1 } from '../typography/Typography';
import ImageWrapper from '../wrappers/ImageWrapper';

const Header = ({ title, text, image, socialMedias }) => (
  <>
    <H1>{title}</H1>
    <BodyText>{text}</BodyText>
    <ImageWrapper></ImageWrapper>
  </>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  socialMedias: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Header;
