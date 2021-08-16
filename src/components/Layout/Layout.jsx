import PropTypes from 'prop-types';
import getSocialLinks from '@root/handlers/getSocialLinks';
import { findApiElementByIdentifier } from '@root/api/findApiElement';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Layout = ({ children, commonApiElements }) => {
  const socialLinks = getSocialLinks(commonApiElements);
  const copyrightText = findApiElementByIdentifier(commonApiElements, 'footer-text').fields.title;
  return (
    <>
      <Navbar socialLinks={socialLinks} />
      {children}
      <Footer socialLinks={socialLinks} copyrightText={copyrightText} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  commonApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Layout;
