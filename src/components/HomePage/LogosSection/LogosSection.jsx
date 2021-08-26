    import Image from 'next/image';
	import PropTypes from 'prop-types';
	import compareProjectsOrder from '@root/handlers/compareProjectsOrder';
	import getLogosData from '@root/handlers/getLogosData';
	import
	{ LogosSectionWrapper,
	  LogosSectionHeader,
	  LogosTextWrapper, 
	  StyledBodyText, 
	  PartnerLogosWrapper } 
	from './LogosSection.styles';

	const LogosSection = ({ logosHeader, logosText, partnerLogosApiElements }) => {
		const homepageLogos = [];

		partnerLogosApiElements.sort(compareProjectsOrder);

		for (let i = 0; i < partnerLogosApiElements.length; i += 1) {
			if (partnerLogosApiElements[i].fields.showOnHomepage === true) {
				homepageLogos.push(partnerLogosApiElements[i]);
			}
  		}	
			const logosData = getLogosData(homepageLogos);
		return (
			<LogosSectionWrapper>
				<LogosTextWrapper>
				<LogosSectionHeader>{logosHeader}</LogosSectionHeader>
				<StyledBodyText>{logosText}</StyledBodyText>
				</LogosTextWrapper>
				<PartnerLogosWrapper>
				 {logosData.map(
        		({ width, height, imageUrl, linkUrl, title }) => (
				
					
							
						<a href={linkUrl}>
							<Image 
							src={`https:${imageUrl}`}
							alt={title}
							width={width}
							height={height}
							/>
						</a>
				 ))
				 }
				  </PartnerLogosWrapper>
			</LogosSectionWrapper>
		)	
	}


	LogosSection.propTypes = {
	  logosHeader: PropTypes.string.isRequired,
	  logosText: PropTypes.string.isRequired,
	  partnerLogosApiElements: PropTypes.arrayOf(PropTypes.object).isRequired

	};
	

	export default LogosSection;
