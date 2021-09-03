import Image from 'next/image';
import PropTypes from 'prop-types';
import compareProjectsOrder from '@root/handlers/compareProjectsOrder';
import getLogosData from '@root/handlers/getLogosData';
import {
  LogosSectionWrapper,
  LogosSectionHeader,
  LogosTextWrapper,
  StyledBodyText,
  PartnerLogosWrapper,
} from './LogosSection.styles';

const LogosSection = ({ logosHeader, logosText, partnerLogos }) => {
  const sortedPartnerLogos = [...partnerLogos].sort(compareProjectsOrder);

  const homepageLogos = sortedPartnerLogos.filter(
    (element) => element.fields.showOnHomepage === true,
  );
  const logosData = getLogosData(homepageLogos);
  return (
    <LogosSectionWrapper>
      <LogosTextWrapper>
        <LogosSectionHeader>{logosHeader}</LogosSectionHeader>
        <StyledBodyText as="div">{logosText}</StyledBodyText>
      </LogosTextWrapper>
      <PartnerLogosWrapper>
        {logosData.map(({ width, height, imageUrl, linkUrl, title }) => (
          <a href={linkUrl}>
            <Image src={`https:${imageUrl}`} alt={title} width={width} height={height} />
          </a>
        ))}
      </PartnerLogosWrapper>
    </LogosSectionWrapper>
  );
};

LogosSection.propTypes = {
  logosHeader: PropTypes.string.isRequired,
  logosText: PropTypes.arrayOf(PropTypes.object).isRequired,
  partnerLogos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LogosSection;
