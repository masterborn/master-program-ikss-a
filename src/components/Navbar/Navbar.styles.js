import styled from "styled-components";
import { getColor } from "@root/styles/utils";
import { SmallButton } from "../Button/Button.styles";

export const Nav = styled.nav`
    position: sticky;
    z-index: 2;
    top: 0;
    display: flex;
    height: 88px;
    padding: 20px 120px;
    align-items: center;
    background-color: ${getColor('white')};
    box-shadow: 0px 4px 16px rgba(97, 121, 139, 0.1);
`;

export const LinksList = styled.ul`
    display: flex;
    list-style: none;
    margin-left: 126px;
    flex-basis: 413px;
    justify-content: space-between;
`;

export const ContactButton = styled(SmallButton)`
    position: absolute;
    right: 120px;
`;

export const StyledLink = styled.a`
    text-decoration: none;
    color: ${({active}) => active ? getColor('navy') : getColor('steel')};
    font-weight: 700;
    cursor: pointer;
`;

export const Socials = styled.div`
    position: absolute;
    right: 336px;
    display: flex;
    justify-content: space-between;
    width: 168px;
    height: 24px;
    opacity: ${({visible}) => visible ? '1' : '0'} ;
    pointer-events: ${({visible}) => visible ? 'auto' : 'none'};
    transition: opacity .1s;

    a {
        cursor: pointer;
    }
`;