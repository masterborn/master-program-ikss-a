import styled, {css, keyframes} from "styled-components";
import { getColor, getFontSize, getLineHeight } from "@root/styles/utils";
import { BodyText, H3, SmallBodyText } from "../typography/Typography";
import { BigButton } from '../Button/Button.styles';

// I know I could use animation-direction: reverse, but it didn't work properly here when prop value changed
const appear = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 0.6;
    }
`;

const disappear = keyframes`
    from {
        opacity: 0.6;
    }
    to {
        opacity: 0;
    }
`;

const slideDown = keyframes`
    0% {
        transform: translateY(-40%);
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    70%{
        transform: translateY(2%);
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
`;

const slideUp = keyframes`
    0% {
        transform: translateY(0);
        opacity: 1;
    }
    30% {
        opacity: 1;
    }
    100% {
        transform: translateY(-40%);
        opacity: 0;
    }
`;

export const FormWrapper = styled.div`
    display: inline-flex;
    position: ${({modalOpen}) => modalOpen ? 'absolute' : 'relative'} ;
    top: ${({modalOpen}) => modalOpen ? '0' : 'auto'};
    bottom: ${({modalOpen}) => modalOpen ? '0' : '-277px'};
    left: ${({modalOpen}) => modalOpen ? '0' : '50%'} ;
    right: ${({modalOpen}) => modalOpen ? '0' : 'auto'};
    transform: ${({modalOpen}) => modalOpen ? 'none' : 'translateX(-50%)'} ;
    z-index: ${({modalOpen}) => modalOpen ? '3' : '1'};

    @media ${({ theme }) => theme.medias.medium} {
        bottom: ${({modalOpen}) => modalOpen ? '0' : '-148px'};
    }
`;

export const Layer = styled.div`
        position: fixed;
        z-index: -1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #1A2847;
        animation: ${({closed}) => closed ? css`${disappear} .3s .1s both` : css`${appear} .3s both` };
`;

export const Form = styled.form`
    position: relative;
    margin: ${({modalOpen}) => modalOpen ? '184px auto' : 0};
    display: flex;
    flex-direction: column;
    width: 748px;
    height: 907px;
    padding: 48px 80px;
    border-radius: 16px;
    box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07), 1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725), 0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035), 0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);
    background-color: ${getColor('white')};
    animation: ${({closed, modalOpen}) => {
        if(modalOpen) {
            if (closed)  return css`${slideUp} .3s  ease-in-out both`   
            return css`${slideDown} .3s .1s  ease-in-out both`}
        return 'none'
    } };

    @media ${({ theme }) => theme.medias.medium} {
        width: 327px;
        height: ${({modalOpen}) => modalOpen ? '861px' : '837px'};
        margin: ${({modalOpen}) => modalOpen ? '32px auto' : 0};
        padding: ${({modalOpen}) => modalOpen ? '56px 16px 32px' : '32px 16px'};
    }
`;

export const StyledH3 = styled(H3)`
    color: ${getColor('navy')};
    text-align: center;
    margin-bottom: 25px;

    @media ${({ theme }) => theme.medias.medium} {
        font-size: ${getFontSize('h5')};
        line-height: ${getLineHeight('h5')};
        margin-bottom: 24px;
    }
`;

export const Description = styled(BodyText)`
    color: ${getColor('steel')};
    text-align: center;
    margin-bottom: 37px;
    padding: 0 10px;

    @media ${({ theme }) => theme.medias.medium} {
        font-size: ${getFontSize('bodySmall')};
        line-height: ${getLineHeight('bodySmall')};
        margin-bottom: 24px;
    }
`;

export const Names = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 9px;

    div:first-child {
        margin-right: 24px;

        @media ${({ theme }) => theme.medias.medium} {
            margin-right: 0;
            margin-bottom: 12px;
        }
    }

    @media ${({ theme }) => theme.medias.medium} {
        flex-wrap: wrap;
        margin-bottom: 12px;
    }

`;

export const NameField = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Label = styled(SmallBodyText)`
    color: ${getColor('navy')};
    display: inline-block;

    &:nth-child(2) {
        color: ${getColor('steel70')};
        margin-left: 16px;
    }
    @media ${({ theme }) => theme.medias.medium} {
        &:first-child {
            margin-bottom: 2px;
        }        
    }
`;

export const FormField = styled.div`
    margin-bottom: 9px;

    @media(max-width: 1024px) {
        margin-bottom: 12px;
    }
`;

export const Declaration = styled.div`
    display: flex;
    margin: 16px 0 37px;
    align-items: center;

    @media ${({ theme }) => theme.medias.medium} {
        margin: 0 0 24px 3.5px;

        label, a {
            font-size: 12px;
            line-height: 15px;
        }
    }
`;

export const PrivacyLink = styled(SmallBodyText)`
    color: ${getColor('steel70')};
    font-weight: 700;
    margin-left: 4px;

    &:hover + div {
        opacity: 1;
        z-index: 1;
    }
`;

export const Info = styled.div`
    position: absolute;
    bottom: 167px;
    left: 234px;
    z-index: -1;
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
    transition: opacity 0.2s, z-index .2s;

    @media ${({ theme }) => theme.medias.medium} {
        width: 223px;
        bottom: 132px;
        left: auto;
    }
`;

 export const FormSubmit = styled(BigButton)`
  align-self: flex-end;
  width: ${({ process, correct, failure }) => {
    if (failure || correct) return '100%';
    if (process) return '157px';
    return 'auto';
  }};
  text-align: center;
  background-color: ${({ correct, failure }) => {
    if (correct) return '#18D4A7';
    if (failure) return getColor('errorRed');
    return getColor('ikssBlue');
  }};
  &:hover {
    background-color: ${({ correct, failure }) => {
      if (correct) return '#18D4A7';
      if (failure) return getColor('errorRed');
      return '#2F95EB';
    }};
  }
  &:active {
    background-color: ${({ correct, failure }) => {
      if (correct) return '#18D4A7';
      if (failure) return getColor('errorRed');
      return '#167CD2';
    }}};

    @media ${({ theme }) => theme.medias.medium} {
        align-self: center;
        height: 36px;
        padding: 9px 16px;
        line-height: 18px;
        font-size: ${getFontSize('bodySmall')};

        span:nth-of-type(1) {
            display: none;
        }
    }
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

    span:nth-of-type(2) {
        display: none;

        @media ${({ theme }) => theme.medias.medium} {
            display: block;
        }
    }

    img {
        margin-right: ${({process}) => process ? 0 : '12px'};
        width: 24px;
        height: 24px;

        @media ${({ theme }) => theme.medias.medium} {
            width: 20px;
            height: 20px;
        }
    }`;   

export const CloseButton = styled.button`
    position: absolute;
    top: 37px;
    right: 37px;
    width: 14px;
    height: 14px;
    background-color: transparent;
    border: none;
    cursor: pointer;

    img {
        width: 100%;
    }

    @media ${({ theme }) => theme.medias.medium} {
        top: 20px;
        right: 24px;
        width: 12px;
        height: 12px;
    }
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
