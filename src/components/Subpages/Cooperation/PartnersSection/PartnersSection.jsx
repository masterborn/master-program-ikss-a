import Image from 'next/image';
import PropTypes from 'prop-types';

import compareProjectsOrder from '@root/handlers/compareProjectsOrder';
import getLogosData from '@root/handlers/getLogosData';
import { limitLogoSize } from '@utils/limitLogoSize';

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
          <a href={linkUrl} key={imageUrl} role="button">
            <Image
              src={`https:${imageUrl}`}
              alt={title}
              aria-label="partner logo"
              width={limitLogoSize(width)}
              height={limitLogoSize(height)}
            />
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
