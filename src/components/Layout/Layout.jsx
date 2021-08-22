import PropTypes from 'prop-types';
import { findApiElementById } from '@root/handlers/findApiElement';
import getSocialMedias from '@root/handlers/getSocialMedias';
import getPaths from '@root/handlers/getPaths';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Layout = ({ children, commonApiElements }) => {
  const links = getPaths();
  const socialMedias = getSocialMedias(commonApiElements);
  const copyrightText = findApiElementById(commonApiElements, '6AkXrKG3dGgyOEYxmKJ5XZ').fields
    .title;
  return (
    <>
      <Navbar socialMedias={socialMedias} links={links} />
      {children}
      <Footer links={links} socialMedias={socialMedias} copyrightText={copyrightText} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  commonApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Layout;
