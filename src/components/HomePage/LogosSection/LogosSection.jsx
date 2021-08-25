    import Image from 'next/image';
	import Link from "next/link";
	import PropTypes from 'prop-types';
	import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

	import
	{ LogosSectionWrapper,
	  LogosSectionHeader,
	  LogosTextWrapper, 
	  StyledBodyText, 
	  PartnerLogosWrapper } 
	from './LogosSection.styles';

	const LogosSection = ({ logosHeader, logosText, partnerLogosApiAssets, partnerLogosApiElements }) => {
		// const imageUrl = partnerLogosApiAssets[0].fields.file.url;
		// const text = partnerLogosApiAssets.name;
	

		
		 console.log("elements");
		 console.log(partnerLogosApiElements);
		 console.log("assets");
		 console.log(partnerLogosApiAssets);
		

		const homepageLogos = [];
		const logosData = [];
	  
		function compareLogosOrder(a, b) {
		  if (a.fields.order < b.fields.order) {
			return 1;
		  }
		  if (a.fields.order > b.fields.order) {
			return -1;
		  }
		  return 0;
		}
		
		partnerLogosApiElements.sort(compareLogosOrder);

		for (let i = 0; i < partnerLogosApiElements.length; i += 1) {
			if (
			partnerLogosApiElements[i].fields.showOnHomepage === true 
			) {
				homepageLogos.push(partnerLogosApiElements[i]);
			}
  		}
		  console.log(homepageLogos);
		  console.log(partnerLogosApiAssets);
		  homepageLogos.forEach((logo) => {
			let imageUrl = '';
			let imageWidth = '';
			let imageHeight = '';
			partnerLogosApiAssets.forEach((asset) => {
			  if (asset.sys.id === logo.fields.logo.sys.id) {
				imageUrl = `https:${asset.fields.file.url}`; 
				imageWidth = asset.fields.file.details.image.width ;
			    imageHeight = asset.fields.file.details.image.height;
			  }
			});

			logosData.push({
			  title: logo.fields.name,
			  linkUrl: logo.fields.linkUrl,
			  imageUrl,
			  width: imageWidth,
			  height: imageHeight
			});
		  });
             console.log(logosData);
			 logosData.map((logo) => (
				 console.log(logo)
			 ))

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
							src={imageUrl}
							alt={title}
							width={width}
							height={height}

							// src={`https://${asset.fields.file.url}`} 
							// width={logo.fields.file.details.image.width} 
							// height={logo.fields.file.details.image.height} 
							// alt={logo.fields.file.details.image.title}
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
	  partnerLogosApiAssets: PropTypes.arrayOf(PropTypes.object).isRequired,
	  partnerLogosApiElements: PropTypes.arrayOf(PropTypes.object).isRequired
	};
	

	export default LogosSection;
