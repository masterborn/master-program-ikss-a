import logo from '../../../public/logo-no-background.png';
import Image from 'next/image';
import ImageWrapper from '../wrappers/ImageWrapper';

const LogoNoBackground = ({ width, height, margin }) => {
  return (
    <>
      <ImageWrapper margin={margin}>
        <Image width={width} height={height} src={logo} />
      </ImageWrapper>
    </>
  );
};

export default LogoNoBackground;
