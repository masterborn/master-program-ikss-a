/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from "styled-components";
import { getColor, getFontSize, getFontWeight, getLetterSpacing } from "@root/styles/utils";
import PropTypes from 'prop-types';

const InputField = styled.input`
    width: 100%;
    height: 48px;
    border-radius: 4px;
    padding: 10px 12px;
    border: 1px solid ;
    border-color: ${({ error }) => error ? getColor('errorRed') : getColor('steel60')};
    color:${getColor('steel60')} ;
    line-height: 28px;
    font-size: ${getFontSize('bodySmall')};
    font-weight: ${getFontWeight('bodySmall')};
    letter-spacing: ${getLetterSpacing('bodySmall')};

    &:disabled {
        color: ${getColor('steel40')};
        background-color: ${getColor('blue5')};
        border-color: ${getColor('steel40')};
    }

    &:valid {
        color: ${getColor('steel')};
    }

    &:focus {
        color: ${getColor('steel')};
        outline: none;
        border-color: ${getColor('ikssBlue')};
    }
`;

const Wrapper = styled.div`
    position: relative;
    width: 24px;
    height: 24px;
    border-radius: 4px;

    span {
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border: 1px solid black;
        border-color: ${({ error }) => error ? getColor('errorRed') : getColor('steel40')};
        border-radius: 4px;
        box-sizing: border-box;
    }

    &:hover span {
        border-color: ${getColor('ikssBlue')};
    }

    input {
        position: absolute;
        z-index: 1;
        opacity: 0;
        width: 100%;
        height: 100%;
    }

    input:checked+span{
        background-color: ${getColor('ikssBlue')};
        border-color:  ${getColor('ikssBlue')};
        background-image: url('/checked.svg');
        background-repeat: no-repeat;
        background-position: center;
    }
`;

const FormField = styled.div`
    position: relative;
    width: ${({ contact }) => contact ? '100%' : '331px'};

    img {
        position: absolute;
        right: 14px;
        bottom: 14px;
        cursor: pointer;
    }

    span {
        position: absolute;
        z-index: 1;
        right: 36px;
        bottom: ${({ isTextArea }) => isTextArea ? '14px' : '50%'};
        transform: ${({ isTextArea }) => isTextArea ? 'none' : 'translateY(50%)'};
        padding: 5px;
        border-radius: 4px;
        background-color: #E8F3FD;
        color: ${getColor('steel')};
        font-size: 12px;
        line-height: 18px;
        font-weight: 400;
        letter-spacing: -0.015em;
        opacity: 0;
        transition: opacity .2s;
    }

    img:hover+span {
        opacity: 1;
    }
`;

const TextArea = styled(InputField)`
    height: 221px;
    resize: none;
    padding: 10px 12px;
`;


const Input = React.forwardRef(({ text, icon, error, name, id, checkbox, disabled, contact, isTextArea, message, ...props }, ref) => {

    const getIcon = () => {
        if (disabled) return '/disabledInfo.svg'
        if (error) return '/warning.svg'
        return '/info.svg'
    }

    if (checkbox) {
        return (
            <Wrapper error={error} >
                <input type="checkbox" name={name} id={id} {...props} ref={ref} />
                <span />
            </Wrapper>
        )
    }

    if (isTextArea) {
        return (
            <FormField isTextArea={isTextArea} contact={contact}>
                <TextArea as='textarea' contact={contact} icon={icon} error={error} disabled={disabled} placeholder={text} type='text' name={name} id={id} {...props} ref={ref} />
                {icon ?
                    <img src={getIcon()} alt='icon' />
                    : null}
                <span>{message}</span>
            </FormField>
        )
    }

    return (
        <FormField contact={contact}>
            <InputField icon={icon} error={error} disabled={disabled} placeholder={text} type='text' name={name} id={id} {...props} ref={ref} />
            {icon ?
                <img src={getIcon()} alt='icon' />
                : null}
            <span>{message}</span>
        </FormField>
    );
});

Input.defaultProps = {
    text: 'Placeholder text...',
    checkbox: false,
    icon: false,
    error: false,
    disabled: false,
    contact: false,
    isTextArea: false,
    message: '',
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    text: PropTypes.string,
    checkbox: PropTypes.bool,
    icon: PropTypes.bool,
    error: PropTypes.bool,
    disabled: PropTypes.bool,
    contact: PropTypes.bool,
    isTextArea: PropTypes.bool,
    message: PropTypes.string
}

export default Input;