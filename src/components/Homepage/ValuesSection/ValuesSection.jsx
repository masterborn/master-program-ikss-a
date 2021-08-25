import React from 'react';
import PropTypes from 'prop-types';
import {
  ValuesWrapper,
  Heading,
  Description,
  TilesWrapper,
  Tile,
  TileHeading,
  TileDescription,
} from './ValuesSection.styles';

const ValuesSection = ({
  valuesHeader: {
    title,
    text1: {
      content: [first],
    },
  },
  homeApiElements,
  valuesTiles,
}) => {
  const { content } = first;

  let assets = homeApiElements.map((asset) => {
    if (asset['fields'].hasOwnProperty('image1')) {
      return asset.fields.image1.fields.file.url;
    }
  });

  assets = assets.filter((asset) => asset);
  assets = assets.filter((asset) => asset.includes('image'));

  return (
    <ValuesWrapper>
      <Heading>{title}</Heading>
      {content.length
        ? content.map(({ value }) => <Description key={value}>{value}</Description>)
        : null}
      <TilesWrapper>
        {valuesTiles.map(
          (
            {
              fields: {
                text1: {
                  content: [firstElement],
                },
                title: heading,
              },
            },
            index,
          ) => (
            <Tile key={heading}>
              <img src={`https://${assets[index]}`} alt="value" />
              <TileHeading>{heading}</TileHeading>
              <TileDescription>{firstElement.content[0].value}</TileDescription>
            </Tile>
          ),
        )}
      </TilesWrapper>
    </ValuesWrapper>
  );
};

ValuesSection.propTypes = {
  valuesHeader: PropTypes.objectOf(PropTypes.any).isRequired,
  homeApiElements: PropTypes.arrayOf(PropTypes.object).isRequired,
  valuesTiles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ValuesSection;
