import Image from 'next/image';
import PropTypes from 'prop-types';
import logo from '../../../public/logo-no-background-white.svg';
import ImageWrapper from '../wrappers/ImageWrapper';

const LogoNoBackgroundWhite = ({ width, height, margin }) => (
  <>
    <ImageWrapper margin={margin}>
      <Image width={width} height={height} src={logo} />
    </ImageWrapper>
  </>
);

LogoNoBackgroundWhite.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
};

LogoNoBackgroundWhite.defaultProps = {
  width: '78px',
  height: '49px',
  margin: '0 0 0 0',
};

export default LogoNoBackgroundWhite;
