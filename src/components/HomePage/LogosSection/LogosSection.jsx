    import Image from 'next/image';
	import Link from "next/link";
	import PropTypes from 'prop-types';
	import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

	import
	{ LogosSectionWrapper,
	  LogosSectionHeader, 
	  StyledBodyText, 
	  PartnerLogosWrapper } 
	from './LogosSection.styles';

	const LogosSection = ({ logosHeader, logosText, partnerLogosApiAssets, partnerLogosApiElements }) => (
	  <LogosSectionWrapper>
	    <LogosSectionHeader>{logosHeader}</LogosSectionHeader>
	    <StyledBodyText>{logosText} <div>{ documentToReactComponents(logosText)}TEXT</div></StyledBodyText>
		<PartnerLogosWrapper>
		<div>LOGOS { documentToReactComponents()}TEXT</div>
		</PartnerLogosWrapper>
	  </LogosSectionWrapper>
	);
	

	LogosSection.propTypes = {
	  logosHeader: PropTypes.string.isRequired,
	  logosText: PropTypes.string.isRequired,
	  partnerLogosApiAssets: PropTypes.arrayOf(PropTypes.object).isRequired
	};
	

	export default LogosSection;
