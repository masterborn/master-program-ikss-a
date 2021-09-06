import React from 'react';
import PropTypes from 'prop-types';
import contentfulClient from '@root/api/contentfulClient';
import findApiElementByIdentifier from '@root/handlers/findApiElement';
import GenericTopSection from '@root/components/GenericTopSection/GenericTopSection';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import GenericBottomCta from '@root/components/GenericBottomCta/GenericBottomCta';
import TeamSection from '@root/components/Subpages/AboutUs/TeamSection';
import ManagementSection from '@root/components/Subpages/AboutUs/ManagementSection/ManagementSection';

const AboutUs = ({ aboutUsApiElements, boardMembersApiElements }) => {
  const topSection = findApiElementByIdentifier(aboutUsApiElements, 'about-us-top-section');
  const topSectionImageUrl = topSection.fields.image1.fields.file.url;
  const subpageTitle = topSection.fields.title;
  const subpageDescription = documentToReactComponents(topSection.fields.text1);
  const bottomCta = findApiElementByIdentifier(aboutUsApiElements, 'about-us-bottom-cta').fields;

  const teamContent = findApiElementByIdentifier(aboutUsApiElements, 'about-us-content-3');

  const boardMembersText = findApiElementByIdentifier(
    aboutUsApiElements,
    'about-us-board-members-text',
  ).fields;

  return (
    <>
      <GenericTopSection
        imageUrl={topSectionImageUrl}
        title={subpageTitle}
        subpageDescription={subpageDescription}
      />
      <TeamSection teamContent={teamContent} />
      <ManagementSection
        boardMembers={boardMembersApiElements}
        boardMembersText={boardMembersText}
      />
      <GenericBottomCta bottomCta={bottomCta} />
    </>
  );
};

export const getStaticProps = async () => {
  const aboutUsApiElements = await contentfulClient.getBasicContent('about-us');
  const boardMembersApiElements = await contentfulClient.getBoardMembers();
  return {
    props: {
      aboutUsApiElements,
      boardMembersApiElements,
    },
  };
};

AboutUs.propTypes = {
  aboutUsApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
  boardMembersApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AboutUs;
