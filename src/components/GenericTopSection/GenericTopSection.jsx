import Image from 'next/image';
import PropTypes from 'prop-types';
import { useRouter } from 'next/dist/client/router';
import {
  TopSectionWrapper,
  StyledHeader,
  StyledSubpageDescription,
  ImageContainer,
} from './GenericTopSecion.styles';

const GenericTopSection = ({ title, imageUrl, subpageDescription }) => {
  const { pathname } = useRouter();
  return (
    <TopSectionWrapper projectsSubpage={pathname === '/projekty'}>
      <ImageContainer>
        <Image src={`https:${imageUrl}`} layout="fill" objectFit="cover" alt="subpage-icon" />
      </ImageContainer>
      <StyledHeader>{title}</StyledHeader>
      <StyledSubpageDescription>{subpageDescription}</StyledSubpageDescription>
    </TopSectionWrapper>
  );
};
GenericTopSection.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  subpageDescription: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GenericTopSection;
