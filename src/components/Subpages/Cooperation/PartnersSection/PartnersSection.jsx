import PropTypes from 'prop-types';
import Image from 'next/image';
import getLogosData from '@root/handlers/getLogosData';
import compareProjectsOrder from '@root/handlers/compareProjectsOrder';
import {
  SectionWrapper,
  TextSection,
  StyledBodyText,
  StyledHeader,
  LogosContainer,
} from './PartnersSection.styles';

const PartnersSection = ({ partnersLogos, sectionTitle, sectionDescription }) => {
  const sortedPartnerLogos = [...partnersLogos].sort(compareProjectsOrder);
  const logosData = getLogosData(sortedPartnerLogos);

  return (
    <SectionWrapper>
      <TextSection>
        <StyledHeader>{sectionTitle}</StyledHeader>
        <StyledBodyText>{sectionDescription}</StyledBodyText>
      </TextSection>
      <LogosContainer>
        {logosData.map(({ width, height, imageUrl, linkUrl, title }) => (
          <a href={linkUrl} key={imageUrl}>
            <Image src={`https:${imageUrl}`} alt={title} width={width} height={height} />
          </a>
        ))}
      </LogosContainer>
    </SectionWrapper>
  );
};

PartnersSection.propTypes = {
  partnersLogos: PropTypes.arrayOf(PropTypes.object).isRequired,
  sectionTitle: PropTypes.string.isRequired,
  sectionDescription: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PartnersSection;
