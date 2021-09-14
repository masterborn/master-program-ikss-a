import styled from "styled-components";
import { getColor, getLineHeight, getFontSize, getFontWeight, getLetterSpacing } from "@root/styles/utils";
import { H1 } from "../typography/Typography";
import { BigButton } from "../Button/Button.styles";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: ${getColor('backgroundGradient')};
    text-align: center;
    min-height: calc(100vh - 88px) ;

     @media ${({theme}) => theme.medias.medium} {
        margin: 0 25px;
        min-height: calc(100vh - 56px) ;
    }
`;

export const ImageWrapper = styled.div`
    max-width: 693px;
    margin: 116px 0 0;

    @media ${({theme}) => theme.medias.medium} {
        margin: 207px 0 -17px;
    }
`;

export const StyledHeader = styled(H1)`
    color: ${getColor('navy')};

    @media ${({theme}) => theme.medias.medium} {
        font-size: 40px;
        line-height: 56px;
    }
`;

export const Description = styled.p`
    font-size: 20px;
    line-height: ${getLineHeight('body')};
    font-weight: 700;
    color: ${getColor('steel')};
    letter-spacing: ${getLetterSpacing('body')};
    margin: 32px 0;

    @media ${({theme}) => theme.medias.medium} {
        font-size: ${getFontSize('bodySmall')};
        line-height: ${getLineHeight('bodySmall')};
        font-weight: ${getFontWeight('bodySmall')};
        margin: 24px 0;
    }
`;

export const Button = styled(BigButton)`
    @media ${({theme}) => theme.medias.medium} {
    padding: 9px 16px;
    font-size: ${getFontSize('bodySmall')};
    line-height: 18px;
    height: 36px;
    }
`;