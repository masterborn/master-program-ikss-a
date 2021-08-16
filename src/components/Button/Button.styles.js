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
    cursor: pointer;

    &:disabled, &:disabled:hover {
        background-color: #B9DBF8;
        box-shadow: none;
    }

    &:hover {
        background-color: #2F95EB;
        box-shadow: 0px 4px 8px rgba(24, 137, 233, 0.15);
    }

    &:active {
        background-color: #167CD2;
    }

    svg {
        margin-right: 8px;
    }

    svg path {
        fill: ${getColor('white')};
    }
`;

export const SecondaryBigButton = styled(BigButton)`
    border: 2px solid;
    border-color: ${getColor('navy')};
    background-color: ${getColor('white')};
    color: ${getColor('navy')};

    &:disabled, &:disabled:hover {
        color: #BABEC7;
        border-color: #BABEC7;
        background-color: ${getColor('white')};
    }

    &:hover {
        border-color: #3C4862;
        color: #3C4862;
        box-shadow: none;
        background-color: ${getColor('white')};
    }

    &:active {
        border-color: #535E75;
        color: #535E75;
    }

    svg path {
        fill: ${getColor('navy')};
    }

    &:disabled svg path, &:disabled:hover svg path {
        fill: #BABEC7;
    }

    &:hover svg path {
        fill: #3C4862;
    }

    &:active svg path {
        fill: #535E75;
    }
`;

export const SmallButton = styled(BigButton)`
    height: 36px;
    padding: ${({icon}) => icon ? `9px, 16px, 9px, 12px` : `9px 16px`};
    line-height: 18px;
    font-size: ${getFontSize('bodySmall')};

    svg {
        margin-right: 5px;
    }
`;

export const SecondarySmallButton = styled(SecondaryBigButton)`
    height: 36px;
    padding: ${({icon}) => icon ? `9px, 16px, 9px, 12px` : `9px 16px`};
    line-height: 18px;
    font-size: ${getFontSize('bodySmall')};

    svg {
        margin-right: 5px;
    }
`;
