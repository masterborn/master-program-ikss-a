import PropTypes from 'prop-types';

const Layout = ({ children }) => <>{children}</>;

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Layout;
