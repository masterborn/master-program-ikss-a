import React from 'react';

import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import smoothscroll from 'smoothscroll-polyfill';

import findApiElementByIdentifier from '@root/handlers/findApiElement';
import getPaths from '@root/handlers/getPaths';
import getSocialMedias from '@root/handlers/getSocialMedias';
import routes from '@root/handlers/routes';

import ContactForm from '../ContactForm/ContactForm';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Layout = ({ children, commonApiElements, formContent }) => {

  const { pathname } = useRouter();

  const links = getPaths();
  const socialMedias = getSocialMedias(commonApiElements);
  const copyrightText = findApiElementByIdentifier(commonApiElements, 'footer-text').fields.title;

  const [formText, formTooltip] = formContent;

  React.useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  return (
    <>
      <Navbar socialMedias={socialMedias} links={links} />
      {children}
      <ContactForm formText={formText} formTooltip={formTooltip} isModal={pathname !== routes.homepage} />
      {
        pathname !== routes.errorPage ?
          <Footer links={links} socialMedias={socialMedias} copyrightText={copyrightText} />
          : null
      }
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  commonApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
  formContent: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Layout;
