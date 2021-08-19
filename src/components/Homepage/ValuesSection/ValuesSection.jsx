import React from 'react';
import PropTypes from 'prop-types';
import { ValuesWrapper, Heading, Description, TilesWrapper, Tile, TileHeading, TileDescription } from './ValuesSection.styles';

const ValuesSection = ({ valuesHeader: { title, text1: { content: [first] } }, valuesAssets, valuesTiles }) => {

    const { content } = first;

    const assets = valuesAssets.map(({ fields: { file: { url, details, fileName } } }) => (
        { url, details, fileName }
    ));

    return (
        <ValuesWrapper>
            <Heading>{title}</Heading>
            {content.length ?
                content.map(({ value }) => <Description key={value}>{value}</Description>)
                : null}
            <TilesWrapper>
                {valuesTiles.map(({ fields: { text1: { content: [firstElement] }, title: heading } }, index) => (
                    <Tile key={heading}>
                        <img src={`https://${assets[index].url}`} alt="value" />
                        <TileHeading>{heading}</TileHeading>
                        <TileDescription>{firstElement.content[0].value}</TileDescription>
                    </Tile>
                ))}
            </TilesWrapper>
        </ValuesWrapper>

    )
}

ValuesSection.propTypes = {
    valuesHeader: PropTypes.objectOf(PropTypes.any).isRequired,
    valuesAssets: PropTypes.arrayOf(PropTypes.object).isRequired,
    valuesTiles: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ValuesSection

