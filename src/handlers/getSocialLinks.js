import { findApiElementByIdentifier } from './findApiElement';

const getSocialLinks = (apiArray) => {
  const socialPages = apiArray.filter((element) => element.fields.linkUrl !== undefined);
  const hasLinkInProperties = socialPages.every((element) => element.fields.linkUrl !== undefined);
  const socialLinks = hasLinkInProperties
    ? {
        facebookUrl: findApiElementByIdentifier(socialPages, 'social-facebook').fields.linkUrl,
        instagramUrl: findApiElementByIdentifier(socialPages, 'social-instagram').fields.linkUrl,
        youtubeUrl: findApiElementByIdentifier(socialPages, 'social-youtube').fields.linkUrl,
        linkedinUrl: findApiElementByIdentifier(socialPages, 'social-linkedin').fields.linkUrl,
      }
    : null;

  return socialLinks;
};

export default getSocialLinks;
