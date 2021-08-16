// import Image from 'next/image';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getColor } from '@root/styles/utils';
import { SecondaryBigButton } from '../Button/Button.styles';
import { H1, BodyText } from '../typography/Typography'


 const HeroSection = styled.div`
 display: flex;
 justify-content: center;
 `;

const MainContent = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 1440px;
height: 463px;
`;

const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
`;

const Vid = styled.video`
  border: solid;
  border-color: pink;
  max-width:100%;
  width: 808px;
  height: 404px;
  margin-right: 0px;
  margin-top: 0px;
  `;

const SocialMediaBar = styled.div`
  border: solid;
  border-color: purple;
  display: flex;
  float: right;
  justify-content: center;
  width: 1030px;
  height: 137px;

`;

 const TopSection = ({ title, text, socialLinks, socialIcons}) => (

    <>

    <HeroSection>
      <MainContent>
        <LeftBlock>
          <H1 width="416px" height="144px" margin=" 77px 95px 32px 120px" marginLeft="120px" marginTop="77px"  color={getColor('navy')}>{title}</H1>
          <BodyText width="384px" height="96px" margin="0px 127px 32px 120px" color={getColor('steel')}>{text}</BodyText>
          <SecondaryBigButton width="156px" margin="0px 355px 34px 120px" color={getColor('navy')}>Skontaktuj się</SecondaryBigButton>
        </LeftBlock>
        <Vid autoPlay muted loop>
        <source src="https://www.youtube.com/watch?v=fGn7cvhH-vc" alt="niceview" />
        
      </Vid>
      
      </MainContent> 
     
    </HeroSection>
   
    </>
    )  

TopSection.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  // image: PropTypes.string.isRequired,
  // socialLinks: PropTypes.objectOf(PropTypes.string).isRequired, 
  // socialIcons: PropTypes.objectOf(PropTypes.string).isRequired, 
}

export default TopSection
