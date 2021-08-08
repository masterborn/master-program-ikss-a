import logo from '../../../public/primary-logo.png';
import Image from 'next/image';
import ImageWrapper from '../wrappers/ImageWrapper';

const PrimaryLogo = ({ width, height, margin }) => {
  return (
    <>
      <ImageWrapper margin={margin}>
        <Image width={width} height={height} src={logo} />
      </ImageWrapper>
    </>
  );
};

export default PrimaryLogo;
