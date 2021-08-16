import Image from 'next/image';
import PropTypes from 'prop-types';
import logo from '../../../public/logo-background.svg';
import ImageWrapper from '../wrappers/ImageWrapper';

const LogoBackground = ({ width, height, margin }) => (
  <>
    <ImageWrapper margin={margin}>
      <Image width={width} height={height} src={logo} />
    </ImageWrapper>
  </>
);

LogoBackground.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
};

LogoBackground.defaultProps = {
  width: '78px',
  height: '49px',
  margin: '0 0 0 0',
};

export default LogoBackground;
