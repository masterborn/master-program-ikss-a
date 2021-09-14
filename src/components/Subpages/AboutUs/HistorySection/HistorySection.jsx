import PropTypes, { oneOfType } from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import React from 'react';
import {
  HistorySectionWrapper,
  TopSection,
  StyledTopSectionText,
  StyledHeader,
  StyledHistoryTextTop,
  TopImageWrapper,
  BottomSection,
  StyledHistoryTextBottom,
  BottomImageWrapper,
  TopImageMobileWrapper,
  BottomImageMobileWrapper,
} from '@root/components/Subpages/AboutUs/HistorySection/HistorySection.styles';

const HistorySection = ({ historyContent: { title, text1, text2, image1, image2 } }) => (
  <HistorySectionWrapper>
    <TopSection>
      <StyledTopSectionText>
        <StyledHeader>{title}</StyledHeader>
        <StyledHistoryTextTop as="div">{documentToReactComponents(text1)}</StyledHistoryTextTop>
      </StyledTopSectionText>
      <TopImageWrapper>
        <Image src={`https:${image1.fields.file.url}`} width={483} height={352} alt="team" />
      </TopImageWrapper>
      <TopImageMobileWrapper>
        <Image src={`https:${image1.fields.file.url}`} width={966} height={704} alt="team" />
      </TopImageMobileWrapper>
    </TopSection>

    <BottomSection>
      <StyledHistoryTextBottom as="div">{documentToReactComponents(text2)}</StyledHistoryTextBottom>
      <BottomImageWrapper>
        <Image src={`https:${image2.fields.file.url}`} width={483} height={265} alt="team" />
      </BottomImageWrapper>
      <BottomImageMobileWrapper>
        <Image src={`https:${image2.fields.file.url}`} width={966} height={530} alt="team" />
      </BottomImageMobileWrapper>
    </BottomSection>
  </HistorySectionWrapper>
);
export default HistorySection;

HistorySection.propTypes = {
  historyContent: PropTypes.objectOf(oneOfType([PropTypes.string, PropTypes.object])).isRequired,
};
