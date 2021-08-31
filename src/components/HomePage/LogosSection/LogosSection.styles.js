import styled from 'styled-components';
import { H3, BodyText } from '@root/components/typography/Typography';


export const LogosSectionWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 148px;
`;

export const LogosTextWrapper=styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
align-items: center;
max-width: 635px;  
margin: 0 auto 86px auto;
`;

 
export const LogosSectionHeader = styled(H3)`
display: flex;
margin-bottom: 32px;
`;

export const StyledBodyText = styled(BodyText)`
display: flex;
justify-content: center;
width: 635px;
height: 64px;
`;

export const PartnerLogosWrapper = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
max-width: 1134px;
margin: 0 auto 0 auto; 
a{
    cursor: pointer;
    display:flex;
    flex-basis: 20%;
    margin-bottom: 60px;
    justify-content: center;
}
`;






