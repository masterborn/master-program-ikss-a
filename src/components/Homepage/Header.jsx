import Image from 'next/image';
import PropTypes from 'prop-types';
import Error from 'next/error';
import { BodyText, H1 } from '../typography/Typography';
import ImageWrapper from '../wrappers/ImageWrapper';

const Header = ({ title, text, image, socialLinks }) => {
  const isFetched = title && text && image && socialLinks;

  return (
    <div>
      {isFetched ? (
        <>
          <H1>{title}</H1>
          <BodyText>{text}</BodyText>
          <ImageWrapper>
            <Image width="808px" height="505px" src={`https:${image}`} alt="top-section-image" />
          </ImageWrapper>
        </>
      ) : (
        <Error statusCode="Data from API is missing" />
      )}
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  socialLinks: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Header;
