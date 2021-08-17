import Image from 'next/image';
import PropTypes from 'prop-types';
import logo from '../../../public/primary-logo.svg';
import ImageWrapper from '../wrappers/ImageWrapper';

const PrimaryLogo = ({ width, height, margin }) => (
  <>
    <ImageWrapper margin={margin}>
      <Image width={width} height={height} src={logo} />
    </ImageWrapper>
  </>
);

PrimaryLogo.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
};

PrimaryLogo.defaultProps = {
  width: '78px',
  height: '49px',
  margin: '0 0 0 0',
};

export default PrimaryLogo;
