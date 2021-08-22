
	import PropTypes from 'prop-types';
	import 
	{ LogosSectionWrapper,
	  LogosSectionHeader, 
	  StyledBodyText } 
	
	from './LogosSection.styles';
	

	const LogosSection = ({ logosHeader, logosText }) => (
	  <LogosSectionWrapper>
          
	    
	    <LogosSectionHeader>{logosHeader}</LogosSectionHeader>

	    <StyledBodyText>{logosText}</StyledBodyText>




	  </LogosSectionWrapper>
	);
	

	LogosSection.propTypes = {
	  logosHeader: PropTypes.string.isRequired,
	  logosText: PropTypes.string.isRequired
	};
	

	export default LogosSection;
