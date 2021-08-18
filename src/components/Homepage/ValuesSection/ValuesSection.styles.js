import styled from "styled-components";
import { getColor } from "@root/styles/utils";
import { H3, H5, BodyText } from '@root/components/typography/Typography';


export const ValuesWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 157px auto 0;
`;

export const Heading = styled(H3)`
    color: ${getColor('navy')};
    margin-bottom: 32px;
    text-align: center;
`;

export const Description = styled(BodyText)`
    color: ${getColor('steel')};
    width: 551px;
    text-align: center;
`; 

export const TilesWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 102px;
    width: 100%;
`;

export const Tile = styled.div`
    position: relative;
    width: 384px;
    box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07), 1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725), 0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035), 0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);
    border-radius: 16px;
    padding: 0 24px 48px;
    text-align: center;
    cursor: pointer;
    transition: transform .2s;

    &:nth-child(2) {
        margin: 0 24px;
    }

    &:hover {
        transform: scale(1.1);
    }

    img {
       position: absolute;
       left: 50%;
       top: -15%;
       transform: translateX(-50%);
    }
`;

export const TileHeading = styled(H5)`
    color: ${getColor('navy')};
    margin: 186px 0 16px;
`;

export const TileDescription = styled(BodyText)`
    color: ${getColor('steel')};
`;