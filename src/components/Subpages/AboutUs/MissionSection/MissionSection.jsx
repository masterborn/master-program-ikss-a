/* eslint-disable react/no-unused-prop-types */
import PropTypes, { oneOfType } from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import React from 'react';
import {
  MissionSectionWrapper,
  StyledMissionText,
  ImageWrapper,
  RightSection,
  StyledHeader,
  ImageMobileWrapper,
} from '@root/components/Subpages/AboutUs/MissionSection/MissionSection.styles';

const MissionSection = ({ missionContent: { title, text1, image1 } }) => (
  <div>
    <MissionSectionWrapper>
      <ImageWrapper>
        <Image src={`https:${image1.fields.file.url}`} width={483} height={245} alt="team" />
      </ImageWrapper>
      <ImageMobileWrapper>
        <Image src={`https:${image1.fields.file.url}`} width={966} height={490} alt="team" />
      </ImageMobileWrapper>
      <RightSection>
        <StyledHeader>{title}</StyledHeader>
        <StyledMissionText as="div">{documentToReactComponents(text1)}</StyledMissionText>
      </RightSection>
    </MissionSectionWrapper>
  </div>
);
export default MissionSection;

MissionSection.propTypes = {
  missionContent: PropTypes.objectOf(oneOfType([PropTypes.string, PropTypes.object])).isRequired,
};
