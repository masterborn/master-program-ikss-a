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

const HistorySection = ({ historyContent }) => {
  const historyTitle = historyContent.title;
  const historyText1 = historyContent.text1;
  const historyText2 = historyContent.text2;
  const url1 = historyContent.image1.fields.file.url;
  const url2 = historyContent.image2.fields.file.url;

  return (
    <HistorySectionWrapper>
      <TopSection>
        <StyledTopSectionText>
          <StyledHeader>{historyTitle}</StyledHeader>
          <StyledHistoryTextTop>{documentToReactComponents(historyText1)}</StyledHistoryTextTop>
        </StyledTopSectionText>
        <TopImageWrapper>
          <Image src={`https:${url1}`} width={483} height={352} alt="team" />
        </TopImageWrapper>
      </TopSection>

      <BottomSection>
        <StyledHistoryTextBottom>{documentToReactComponents(historyText2)}</StyledHistoryTextBottom>
        <BottomImageWrapper>
          <Image src={`https:${url2}`} width={483} height={265} alt="team" />
        </BottomImageWrapper>
      </BottomSection>
    </HistorySectionWrapper>
  );
};

export default HistorySection;

HistorySection.propTypes = {
  historyContent: PropTypes.objectOf(oneOfType([PropTypes.string, PropTypes.object])).isRequired,
};
