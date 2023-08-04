import facebookCircleLogo from '../components/icons/svgs/facebook-circle-icon.svg';
import facebookLogo from '../components/icons/svgs/facebook-icon.svg';
import instagramCircleLogo from '../components/icons/svgs/instagram-circle-icon.svg';
import instagramLogo from '../components/icons/svgs/instagram-icon.svg';
import linkedinCircleLogo from '../components/icons/svgs/linkedin-circle-icon.svg';
import linkedinLogo from '../components/icons/svgs/linkedIn-icon.svg';
import youtubeCircleLogo from '../components/icons/svgs/youtube-circle-icon.svg';
import youtubeLogo from '../components/icons/svgs/youtube-icon.svg';

import getSocialLinks from './getSocialLinks';

const getSocialMedias = (apiArray) => {
  const socialLinks = getSocialLinks(apiArray);
  const socialMedias = [
    {
      logo: facebookLogo,
      circleLogo: facebookCircleLogo,
      title: 'Facebook',
      url: socialLinks.facebookUrl,
    },
    {
      logo: instagramLogo,
      circleLogo: instagramCircleLogo,
      title: 'Instagram',
      url: socialLinks.instagramUrl,
    },
    {
      logo: youtubeLogo,
      circleLogo: youtubeCircleLogo,
      title: 'YouTube',
      url: socialLinks.youtubeUrl,
    },
    {
      logo: linkedinLogo,
      circleLogo: linkedinCircleLogo,
      title: 'LinkedIn',
      url: socialLinks.linkedinUrl,
    },
  ];
  return socialMedias;
};

export default getSocialMedias;
