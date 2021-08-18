import Image from 'next/image';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { H1, BodyText } from '@root/components/typography/Typography';
import { SecondaryBigButton } from '@root/components/Button/Button.styles';


const HeroSection = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    
`;

const MainContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1440px;
    
`;

const LeftBlock = styled.div`
    border: 2px solid;
    border-color: yellow;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
    
`;

const Vid = styled.div`
border: 2px solid;
border-color: green;
width: 808px;
height: 463px;
margin-top: 0px;\
`;

const HeroHeading = styled(H1)`
margin-top: 77px;
margin-left: 120px;
`;

const HeroBodyText = styled(BodyText)`
margin-top: 32px;
margin-left: 120px;
width: 384px;
`;

const HeroSecondaryBigButton = styled(SecondaryBigButton)`
margin-top: 32px;
margin-left: 120px;
margin-bottom: 42px;
`;




const Header = ({ title, text, image, socialMedias }) => (
  <>
  <HeroSection>
      <MainContent>
          <LeftBlock>
    <HeroHeading>{title}</HeroHeading>
    <HeroBodyText>{text}</HeroBodyText>
    <HeroSecondaryBigButton alt="CTA">Skontaktuj się</HeroSecondaryBigButton>
         </LeftBlock>
         <Vid autoPlay loop muted src={`https:${image}`} alt="top-section-image" />
      </MainContent>
  </HeroSection>
  </>
);



Header.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  socialMedias: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Header;
