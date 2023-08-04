import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import PropTypes from 'prop-types';

import { TilesWrapper, Tile, TileHeading, TileDescription } from './ValuesSection.styles';

const Tiles = ({ tiles }) => (
  <TilesWrapper>
    {tiles.map(
      ({
        fields: {
          text1: tileDescription,
          title: heading,
          image1: {
            fields: {
              file: { url },
            },
          },
        },
      }) => (
        <Tile key={heading}>
          <img src={`https://${url}`} alt="value" role="presentation" />
          <TileHeading>{heading}</TileHeading>
          <TileDescription as="div">{documentToReactComponents(tileDescription)}</TileDescription>
        </Tile>
      )
    )}
  </TilesWrapper>
);

Tiles.propTypes = {
  tiles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Tiles;
