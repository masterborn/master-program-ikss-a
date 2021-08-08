import logo from '../../../public/logo-background.png';
import Image from 'next/image';
import ImageWrapper from '../wrappers/ImageWrapper';

const LogoBackground = ({ width, height, margin }) => {
  return (
    <>
      <ImageWrapper margin={margin}>
        <Image width={width} height={height} src={logo} />
      </ImageWrapper>
    </>
  );
};

export default LogoBackground;
