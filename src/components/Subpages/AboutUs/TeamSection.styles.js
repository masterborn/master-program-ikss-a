import styled from "styled-components";
import { H3, BodyText } from "@root/components/typography/Typography";
import { getColor, getFontSize, getLineHeight } from "@root/styles/utils";

export const TeamWrapper = styled.section`
    max-width: 996px;
    margin: 164px auto 0;
    text-align: center;   

      img {
        width: 100%;
        border-radius: 16px; 

        @media ${({theme}) => theme.medias.medium} {
        border-radius: 8px; 
    }
    }

    @media ${({theme}) => theme.medias.medium} {
        margin: 80px 24px 0;
    }
`;

export const TeamHeading = styled(H3)`
    color:  ${getColor('navy')};
    margin: 0 auto;

    @media ${({theme}) => theme.medias.medium} {
        font-size: ${getFontSize('h4')};
        line-height: ${getLineHeight('h4')};
    }
`;

export const TeamDescription = styled(BodyText)`
    max-width: 635px;
    margin: 32px auto 64px;
    color: ${getColor('steel')}; 

    @media ${({theme}) => theme.medias.medium} {
        margin: 16px auto 32px;
    }
`;

