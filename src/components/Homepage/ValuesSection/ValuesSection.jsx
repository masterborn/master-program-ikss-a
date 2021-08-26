import React from 'react';
import PropTypes from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { ValuesWrapper, Heading, Description, TilesWrapper, Tile, TileHeading, TileDescription } from './ValuesSection.styles';

const ValuesSection = ({ valuesHeader: { title, text1: description }, valuesTiles, }) => (
    <ValuesWrapper>
        <Heading>{title}</Heading>
        <Description as='div'>{documentToReactComponents(description)}</Description>
        <TilesWrapper>
            {valuesTiles.map(({ fields: { text1: tileDescription, title: heading, image1: { fields: { file: { url } } } } }) => (
                <Tile key={heading}>
                    <img src={`https://${url}`} alt="value" />
                    <TileHeading>{heading}</TileHeading>
                    <TileDescription as='div'>{documentToReactComponents(tileDescription)}</TileDescription>
                </Tile>
            ))}
        </TilesWrapper>
    </ValuesWrapper>
);


ValuesSection.propTypes = {
    valuesHeader: PropTypes.objectOf(PropTypes.any).isRequired,
    valuesTiles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ValuesSection;
