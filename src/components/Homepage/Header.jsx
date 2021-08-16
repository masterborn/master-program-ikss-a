import Image from 'next/image';
import PropTypes from 'prop-types';
import { BodyText, H1 } from '../typography/Typography';
import ImageWrapper from '../wrappers/ImageWrapper';

const Header = ({ title, text, image, socialLinks }) => (
  <>
    <H1>{title}</H1>
    <BodyText>{text}</BodyText>
    <ImageWrapper>
      <Image width="808px" height="505px" src={`https:${image}`} alt="top-section-image" />
    </ImageWrapper>
  </>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  socialLinks: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Header;
