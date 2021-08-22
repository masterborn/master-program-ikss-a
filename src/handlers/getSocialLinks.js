import { findApiElementById } from './findApiElement';

const getSocialLinks = (apiArray) => {
  const socialPages = apiArray.filter((element) => element.fields.linkUrl !== undefined);
  const hasLinkInProperties = socialPages.every((element) => element.fields.linkUrl !== undefined);
  const socialLinks = hasLinkInProperties
    ? {
        facebookUrl: findApiElementById(socialPages, 'wceVymnffPGVmTtbSHHZ0').fields.linkUrl,
        instagramUrl: findApiElementById(socialPages, '3fLPV37zcRQIQSodv4CCBK').fields.linkUrl,
        youtubeUrl: findApiElementById(socialPages, '2rV9pJAYpPqCghlKiKjC3b').fields.linkUrl,
        linkedinUrl: findApiElementById(socialPages, 'jRYH4RO0j4uBlacnHxXAc').fields.linkUrl,
      }
    : null;

  return socialLinks;
};

export default getSocialLinks;
