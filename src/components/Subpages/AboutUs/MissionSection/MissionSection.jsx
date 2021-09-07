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
} from '@root/components/Subpages/AboutUs/MissionSection/MissionSection.styles';

const MissionSection = ({ missionContent }) => {
  const missionTitle = missionContent.title;
  const missionText = missionContent.text1;
  const missionUrl = missionContent.image1.fields.file.url;

  return (
    <div>
      <MissionSectionWrapper>
        <ImageWrapper>
          <Image
            className="bordermissionmobile"
            src={`https:${missionUrl}`}
            width={483}
            height={245}
            alt="team"
          />
        </ImageWrapper>
        <RightSection>
          <StyledHeader>{missionTitle}</StyledHeader>
          <StyledMissionText as="div">{documentToReactComponents(missionText)}</StyledMissionText>
        </RightSection>
      </MissionSectionWrapper>
    </div>
  );
};
export default MissionSection;

MissionSection.propTypes = {
  missionContent: PropTypes.objectOf(oneOfType([PropTypes.string, PropTypes.object])).isRequired,
};
