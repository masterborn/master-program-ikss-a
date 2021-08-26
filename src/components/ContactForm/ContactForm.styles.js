import styled from "styled-components";
import { getColor } from "@root/styles/utils";
import { BodyText, H3, SmallBodyText } from "../typography/Typography";
import { BigButton } from '../Button/Button.styles';

export const FormWrapper = styled.div`
    display: inline-flex;
    position: ${({modalOpen}) => modalOpen ? 'fixed' : 'relative'} ;
    top: ${({modalOpen}) => modalOpen ? '0' : 'auto'};
    bottom: ${({modalOpen}) => modalOpen ? '0' : '-277px'};
    left: ${({modalOpen}) => modalOpen ? '0' : '50%'} ;
    right: ${({modalOpen}) => modalOpen ? '0' : 'auto'};
    transform: ${({modalOpen}) => modalOpen ? 'none' : 'translateX(-50%)'} ;
    z-index: ${({modalOpen}) => modalOpen ? '3' : '1'};
`;

export const Layer = styled.div`
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #1A2847;
        opacity: 0.6;
`;

export const Form = styled.form`
    position: ${({modalOpen}) => modalOpen ? 'absolute' : 'static'};
    top: 184px;
    left: 50%;
    transform: ${({modalOpen}) => modalOpen ? 'translateX(-50%)' : 'none'};
    z-index: 3;
    display: flex;
    flex-direction: column;
    width: 748px;
    height: 907px;
    padding: 48px 80px;
    border-radius: 16px;
    box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07), 1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725), 0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035), 0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);
    background-color: ${getColor('white')};
`;

export const StyledH3 = styled(H3)`
    color: ${getColor('navy')};
    text-align: center;
    margin-bottom: 25px;
`;

export const Description = styled(BodyText)`
    color: ${getColor('steel')};
    text-align: center;
    margin-bottom: 37px;
    padding: 0 10px;
`;

export const Names = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 9px;
    div:first-child {
        margin-right: 24px;
    }
`;

export const NameField = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

export const Label = styled(SmallBodyText)`
    color: ${getColor('navy')};
    &:nth-child(2) {
        color: ${getColor('steel70')};
        margin-left: 16px;
    }
`;

export const FormField = styled.div`
    margin-bottom: 9px;
`;

export const Declaration = styled.div`
    display: flex;
    margin-top: 16px;
    margin-bottom: 37px;
    align-items: center;
`;

export const PrivacyLink = styled(SmallBodyText)`
    color: ${getColor('steel70')};
    position: relative;
    font-weight: 700;
    margin-left: 4px;
    &:hover div {
        opacity: 1;
    }
`;

export const Info = styled.div`
    position: absolute;
    bottom: calc(100% + 6px);
    z-index: 1;
    width: 347px;
    padding: 13px 17px 19px 19px;
    border-radius: 4px;
    background-color: #E8F3FD;
    color: ${getColor('steel')};
    font-size: 10px;
    line-height: 18px;
    font-weight: 400;
    letter-spacing: -0.015em;
    opacity: 0;
    transition: opacity 0.2s;
`;

export const FormSubmit = styled(BigButton)`
    align-self: flex-end;
    width: ${({process, correct, failure}) => {
        if(failure || correct) return '100%'
        if(process) return '157px'    
        return 'auto'
    }};
    text-align: center;
    background-color: ${({correct, failure}) => {
        if(correct) return '#18D4A7'
        if(failure) return getColor('errorRed')
        return getColor('ikssBlue') 
    }};
    &:hover {
        background-color: ${({correct, failure}) => {
        if(correct) return '#18D4A7'
        if(failure) return getColor('errorRed')
        return '#2F95EB' 
    }};
    }
    &:active {
        background-color: ${({correct, failure}) => {
        if(correct) return '#18D4A7'
        if(failure) return getColor('errorRed')
        return '#167CD2' ;
        }};
    }
    svg {
        margin-right: ${({process}) => process ? 0 : '12px'};
    }
    svg path {
        stroke: ${({failure}) => failure ?  'none' : getColor('white')};
        fill: ${({failure}) => failure ? getColor('white') : 'none'};
    }
    svg circle {
        stroke: ${getColor('white')};
    }
`;

export const CloseBtn = styled.button`
    position: absolute;
    top: 37px;
    right: 37px;
    width: 14px;
    height: 14px;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

export const UserCode = styled.input`
    position: absolute;
    top: 0;
    left: 0;
    height: 0;
    width: 0;
    z-index: -1;
    visibility: hidden;
`; 