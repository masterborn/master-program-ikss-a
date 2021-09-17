import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import contentfulClient from '@root/api/contentfulClient';
import findApiElementByIdentifier from '@root/handlers/findApiElement';
import GenericTopSection from '@root/components/GenericTopSection/GenericTopSection';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import GenericBottomCta from '@root/components/GenericBottomCta/GenericBottomCta';
import MissionSection from '@root/components/Subpages/AboutUs/MissionSection/MissionSection';
import HistorySection from '@root/components/Subpages/AboutUs/HistorySection/HistorySection';
import TeamSection from '@root/components/Subpages/AboutUs/TeamSection';
import ManagementSection from '@root/components/Subpages/AboutUs/ManagementSection/ManagementSection';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';

const AboutUs = ({ aboutUsApiElements, boardMembersApiElements }) => {
  const topSection = findApiElementByIdentifier(aboutUsApiElements, 'about-us-top-section');
  const topSectionImageUrl = topSection.fields.image1.fields.file.url;
  const subpageTitle = topSection.fields.title;
  const subpageDescription = documentToReactComponents(topSection.fields.text1);
  const bottomCta = findApiElementByIdentifier(aboutUsApiElements, 'about-us-bottom-cta').fields;

  const teamContent = findApiElementByIdentifier(aboutUsApiElements, 'about-us-content-3');

  const missionContent = findApiElementByIdentifier(
    aboutUsApiElements,
    'about-us-content-1',
  ).fields;

  const historyContent = findApiElementByIdentifier(
    aboutUsApiElements,
    'about-us-content-2',
  ).fields;

  const boardMembersText = findApiElementByIdentifier(
    aboutUsApiElements,
    'about-us-board-members-text',
  ).fields;

  const metaTitleAboutUs = findApiElementByIdentifier(aboutUsApiElements, 'about-us-meta').fields
    .title;
  const metaDescriptionAboutUs = findApiElementByIdentifier(aboutUsApiElements, 'about-us-meta')
    .fields.text1;

  return (
    <>
      <Head>
        <title>{metaTitleAboutUs}</title>
        <meta name="description" content={documentToPlainTextString(metaDescriptionAboutUs)} />
      </Head>
      <>
        <GenericTopSection
          imageUrl={topSectionImageUrl}
          title={subpageTitle}
          subpageDescription={subpageDescription}
        />
        <MissionSection missionContent={missionContent} />
        <HistorySection historyContent={historyContent} />
        <ManagementSection
          boardMembers={boardMembersApiElements}
          boardMembersText={boardMembersText}
        />
        <TeamSection teamContent={teamContent} />
        <GenericBottomCta bottomCta={bottomCta} />
      </>
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
