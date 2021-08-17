import Image from 'next/image';
import PropTypes from 'prop-types';
import logo from '../../../public/logo-no-background.svg';
import ImageWrapper from '../wrappers/ImageWrapper';

const LogoNoBackground = ({ width, height, margin }) => (
  <>
    <ImageWrapper margin={margin}>
      <Image width={width} height={height} src={logo} />
    </ImageWrapper>
  </>
);

LogoNoBackground.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
};

LogoNoBackground.defaultProps = {
  width: '78px',
  height: '49px',
  margin: '0 0 0 0',
};

export default LogoNoBackground;
