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
} from '@root/components/Subpages/AboutUs/HistorySection/HistorySection.styles';

const HistorySection = ({ historyContent: { title, text1, text2, image1, image2 } }) => (
  <HistorySectionWrapper>
    <TopSection>
      <StyledTopSectionText>
        <StyledHeader>{title}</StyledHeader>
        <StyledHistoryTextTop>{documentToReactComponents(text1)}</StyledHistoryTextTop>
      </StyledTopSectionText>
      <TopImageWrapper>
        <Image src={`https:${image1.fields.file.url}`} width={483} height={352} alt="team" />
      </TopImageWrapper>
    </TopSection>

    <BottomSection>
      <StyledHistoryTextBottom>{documentToReactComponents(text2)}</StyledHistoryTextBottom>
      <BottomImageWrapper>
        <Image src={`https:${image2.fields.file.url}`} width={483} height={265} alt="team" />
      </BottomImageWrapper>
    </BottomSection>
  </HistorySectionWrapper>
);
export default HistorySection;

HistorySection.propTypes = {
  historyContent: PropTypes.objectOf(oneOfType([PropTypes.string, PropTypes.object])).isRequired,
};
