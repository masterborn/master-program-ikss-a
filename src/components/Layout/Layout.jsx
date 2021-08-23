import PropTypes, { oneOfType } from 'prop-types';
import findApiElementByIdentifier from '@root/handlers/findApiElement';
import getSocialMedias from '@root/handlers/getSocialMedias';
import getPaths from '@root/handlers/getPaths';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Layout = ({ children, commonApiElements }) => {
  const links = getPaths();
  const socialMedias = getSocialMedias(commonApiElements);
  const copyrightText = findApiElementByIdentifier(commonApiElements.items, 'footer-text').fields
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
  commonApiElements: PropTypes.objectOf(
    oneOfType([PropTypes.object, PropTypes.array, PropTypes.number]),
  ).isRequired,
};

export default Layout;
