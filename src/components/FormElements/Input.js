import styled from "styled-components";
import { getColor, getFontSize, getFontWeight, getLetterSpacing  } from "@root/styles/utils";

const InputField = styled.input`
    width: 331px;
    height: 48px;
    border-radius: 4px;
    background-image: ${({error, icon}) => {
        if(icon){
        if(error) return `url('/triangle.svg'), url('/exclam.svg'), url('/dotRed.svg')`
        return `url('/circleBlue.svg'), url('/iBlue.svg'), url('/dotBlue.svg')`
        }  
        return 'none'
    }};
    background-repeat: no-repeat;
    background-position: ${({error}) => error ? `right 14px center, right 7% top 47%, right 22px top 60%` : `right 14px center, right 7% top 55%, right 22px top 42%`};
    padding: 10px 12px;
    border: 2px solid ;
    border-color: ${({error}) => error ? getColor('errorRed') : getColor('steel60')};
    color:${getColor('steel60')} ;
    line-height: 28px;
    font-size: ${getFontSize('bodySmall')};
    font-weight: ${getFontWeight('bodySmall')};
    letter-spacing: ${getLetterSpacing('bodySmall')};

    &:disabled {
        color: ${getColor('steel40')};
        background-color: ${getColor('blue5')};
        border-color: ${getColor('steel40')};
        background-image: ${({icon}) => icon ? `url('/circle.svg'), url('/i.svg'), url('/dot.svg')` : 'none'};
    }

    &:focus {
        color: ${getColor('steel')};
        outline: none;
        border-color: ${getColor('ikssBlue')};
    }

    &:valid {
        color: ${getColor('steel')};
    }
`;

const Wrapper = styled.div`
    position: relative;
    width: 24px;
    height: 24px;
    border-radius: 4px;

    span {
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border: 1.5px solid ${getColor('steel40')};
        border-radius: 4px;
        box-sizing: border-box;
    }

    &:hover span {
        border-color:  ${getColor('ikssBlue')};
    }

    input {
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


const Input = ({text = 'Placeholder text...', icon, error, name, id, checkbox}) => {

    if(checkbox) {
        return (
            <Wrapper>
                <input type="checkbox" name={name} id={id} />
                <span></span>
            </Wrapper>
        )
    }
    
    return (  
        <InputField placeholder={text} type='text' name={name} id={id} />     
     );
}

export default Input;