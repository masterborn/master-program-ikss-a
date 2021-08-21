import styled from 'styled-components';
import { getColor } from "@root/styles/utils";
import { H1, H5, BodyText } from '@root/components/typography/Typography';
import { SecondaryBigButton } from '@root/components/Button/Button.styles';

export const HeroSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    
`;

export const MainContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1440px;
    
`;

export const LeftBlock = styled.div`
 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
    
`;

export const Vid = styled.div`

width: 808px;
height: 505px;
margin-top: 0px;
margin-right:0px;
`;

export const HeaderSocialMediaWrapper= styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 1038px;
height: 137px;
margin-right:0px;
margin-left: 402px;
background-color: #ffffff;
box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07), 1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725), 0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035), 0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);
border-radius: 16px 0px 0px 16px;
margin-bottom: 32px;
`;

export const Socials = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 835px;
    height: 120px;
    margin-left: 56px;
    margin-right: 120px;
    margin-top: 44px;
    margin-bottom: 45px;
    
    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        cursor: pointer;
    }
`;

export const HeroHeading = styled(H1)`
margin-top: 77px;
margin-left: 120px;
`;

export const HeroLinks = styled(H5)`
margin-left: 14px;
color: ${getColor('navy')};
`;


export const HeroBodyText = styled(BodyText)`
margin-top: 32px;
margin-left: 120px;
width: 384px;
`;

export const HeroSecondaryBigButton = styled(SecondaryBigButton)`
margin-top: 32px;
margin-left: 120px;
margin-bottom: 42px;
`;


