import { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useEmblaCarousel } from 'embla-carousel/react';
import { Tile, TileDescription, TileHeading } from './ValuesSection.styles';
import {
  Embla,
  EmblaContainer,
  EmblaSlide,
  EmblaDots,
  EmblaDot,
  EmblaViewport,
} from './Carousel.styles';

const Carousel = ({ tiles }) => {
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on('select', onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <>
      <Embla>
        <EmblaViewport ref={viewportRef}>
          <EmblaContainer>
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
                <EmblaSlide key={heading}>
                  <Tile>
                    <img src={`https://${url}`} alt="value" />
                    <TileHeading>{heading}</TileHeading>
                    <TileDescription as="div">
                      {documentToReactComponents(tileDescription)}
                    </TileDescription>
                  </Tile>
                </EmblaSlide>
              ),
            )}
          </EmblaContainer>
        </EmblaViewport>
      </Embla>
      <EmblaDots>
        {scrollSnaps.map((_, index) => (
          <EmblaDot
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className={index === selectedIndex && 'is-selected'}
            type="button"
            onClick={() => scrollTo(index)}
          />
        ))}
      </EmblaDots>
    </>
  );
};

Carousel.propTypes = {
  tiles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Carousel;
