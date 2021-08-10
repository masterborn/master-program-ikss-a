import styled from "styled-components";
import { getFontSize } from "@root/styles/utils";


export const BigButton = styled.button`
    background-color: ${({theme, disabled}) => disabled ? `#B9DBF8` : theme.color.ikksBlue};
    height: 48px;
    padding: ${({icon}) => icon ? `12px 24px 12px 18px` : `14px 24px`} ;
    border-radius: 26px;
    font-weight: 700;
    line-height: 20px;
    color: ${({theme}) => theme.color.white};
    font-size: ${getFontSize('body')};
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: ${({isPressed, disabled}) => {
            if(disabled) return `#B9DBF8`
            if(isPressed) return `#167CD2`
            return `#2F95EB`
        } };
        box-shadow: 0px 4px 8px rgba(24, 137, 233, 0.15);
    }

    svg {
        margin-right: 15px;
    }
`;

export const SecondaryBigButton = styled(BigButton)`
    border: 2px solid;
    border-color: ${({theme, disabled}) => disabled ? `#BABEC7` : theme.color.navy};
    background-color: ${({theme}) => theme.color.white};
    color: ${({theme, disabled}) => disabled ? `#BABEC7` : theme.color.navy};

    &:hover {
        border-color: ${({isPressed, disabled}) => {
            if(disabled) return `#BABEC7`
            if(isPressed) return `#535E75`
            return `#3C4862`
        } };
        color:  ${({isPressed, disabled}) => {
            if(disabled) return `#BABEC7`
            if(isPressed) return `#535E75`
            return `#3C4862`
        } };
        background-color: ${({theme}) => theme.color.white};
        box-shadow: none;
    }

    svg {
        color: ${({theme, disabled}) => disabled ? `#BABEC7` : theme.color.navy};
    }

    &:hover svg {
        color:  ${({isPressed, disabled}) => {
            if(disabled) return `#BABEC7`
            if(isPressed) return `#535E75`
            return `#3C4862`
        } };
    }
`;

export const SmallButton = styled(BigButton)`
    height: 36px;
    padding: ${({icon}) => icon ? `9px, 16px, 9px, 12px` : `9px 16px`};
    line-height: 18px;
    font-size: ${getFontSize('bodySmall')};

    svg {
        margin-right: 12px;
    }
`;

export const SecondarySmallButton = styled(SecondaryBigButton)`
    height: 36px;
    padding: ${({icon}) => icon ? `9px, 16px, 9px, 12px` : `9px 16px`};
    line-height: 18px;
    font-size: ${getFontSize('bodySmall')};

    svg {
        margin-right: 12px;
    }
`;


