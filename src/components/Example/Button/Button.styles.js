import styled from "styled-components";
import { getFontSize, getColor } from "@root/styles/utils";


export const BigButton = styled.button`
    background-color: ${getColor('ikssBlue')};
    height: 48px;
    padding: ${({icon}) => icon ? `12px 24px 12px 18px` : `14px 24px`} ;
    border-radius: 26px;
    font-weight: 700;
    line-height: 20px;
    color: ${getColor('white')};
    font-size: ${getFontSize('body')};
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;

    &:disabled {
        background-color: #B9DBF8;
    }

    &:active {
        background-color: #167CD2;
    }

    &:hover {
        background-color: #2F95EB;
        box-shadow: 0px 4px 8px rgba(24, 137, 233, 0.15);
    }

    svg {
        margin-right: 15px;
    }
`;

export const SecondaryBigButton = styled(BigButton)`
    border: 2px solid;
    border-color: ${getColor('navy')};
    background-color: ${getColor('white')};
    color: ${getColor('navy')};

    &:disabled {
        color: #BABEC7;
        border-color: #BABEC7;
    }

    &:active {
        border-color: #535E75;
        color: #535E75;
    }

    &:hover {
        border-color: #3C4862;
        color: #3C4862;
        box-shadow: none;
    }

    svg {
        color: ${getColor('navy')};
    }

    &:disabled svg {
        color: #BABEC7;
    }

    &:active svg {
        color: #535E75;
    }

    &:hover svg {
        color: #3C4862;
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


