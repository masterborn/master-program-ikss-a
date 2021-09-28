import Image from 'next/image';
import PropTypes from 'prop-types';
import { useRouter } from 'next/dist/client/router';
import routes from '@root/handlers/routes';
import {
  Wrapper,
  TopSectionWrapper,
  StyledHeader,
  StyledSubpageDescription,
  ImageContainer,
} from './GenericTopSecion.styles';

const GenericTopSection = ({ title, imageUrl, subpageDescription }) => {
  const { pathname } = useRouter();
  return (
<<<<<<< HEAD
    <TopSectionWrapper projectsSubpage={pathname === '/projekty'}>
      <ImageContainer>
        <Image
          src={`https:${imageUrl}`}
          layout="fill"
          objectFit="cover"
          alt={title}
          role="presentation"
        />
      </ImageContainer>
      <StyledHeader>{title}</StyledHeader>
      <StyledSubpageDescription>{subpageDescription}</StyledSubpageDescription>
    </TopSectionWrapper>
=======
    <Wrapper>
      <TopSectionWrapper projectsSubpage={pathname === routes.projects}>
        <ImageContainer>
          <Image src={`https:${imageUrl}`} layout="fill" objectFit="cover" alt="subpage-icon" />
        </ImageContainer>
        <StyledHeader>{title}</StyledHeader>
        <StyledSubpageDescription>{subpageDescription}</StyledSubpageDescription>
      </TopSectionWrapper>
    </Wrapper>
>>>>>>> 967c34037b28c85850c78cc060a92bbc34363504
  );
};
GenericTopSection.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  subpageDescription: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GenericTopSection;
