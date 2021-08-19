import Image from 'next/image';
import PropTypes from 'prop-types';
import {
  TopSectionWrapper,
  StyledHeader,
  StyledSubpageDecription,
} from './GenericTopSecion.styles';

const GenericTopSection = ({ title, imageUrl, subpageDescription }) => (
  <TopSectionWrapper>
    <Image src={`https:${imageUrl}`} height="142px" width="230px" />
    <StyledHeader>{title}</StyledHeader>
    <StyledSubpageDecription>{subpageDescription}</StyledSubpageDecription>
  </TopSectionWrapper>
);

GenericTopSection.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  subpageDescription: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GenericTopSection;
