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

	const LogosSection = ({ logosHeader, logosText, partnerLogos }) => {
		const sortedPartnerLogos = [...partnerLogos].sort(compareProjectsOrder);

		// partnerLogos.sort(compareProjectsOrder);
		console.log(partnerLogos);
		

		const homepageLogos = sortedPartnerLogos.filter(element => element.fields.showOnHomepage ===true);	
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
	  partnerLogos: PropTypes.shape({
		  width: PropTypes.number.isRequired,
		  height: PropTypes.number.isRequired,
		  title: PropTypes.string.isRequired,
		  alt: PropTypes.string.isRequired,
		  linkUrl: PropTypes.string.isRequired,
		  imageUrl: PropTypes.string.isRequired,
		  order: PropTypes.number.isRequired,
	})
	};
	
	LogosSection.defaultProps = {
		partnerLogos: {
		width: '180px',
		height: '40px',
		title: 'title',
		alt: 'logo',
		linkUrl: "link",
		imageUrl:"image",
		}
	  };

	export default LogosSection;
