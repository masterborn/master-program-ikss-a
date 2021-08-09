import styled from 'styled-components';
import { getFontWeight, getFontSize, getLetterSpacing, getLineHeight } from '../../styles/utils';

export const H1 = styled.h1`
  font-weight: ${getFontWeight('h1')};
  font-size: ${getFontSize('h1')};
  line-height: ${getLineHeight('h1')};
  letter-spacing: ${getLetterSpacing('h1')};
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
`;

export const H2 = styled.h2`
  font-weight: ${getFontWeight('h2')};
  font-size: ${getFontSize('h2')};
  line-height: ${getLineHeight('h2')};
  letter-spacing: ${getLetterSpacing('h2')};
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
`;

export const H3 = styled.h3`
  font-weight: ${getFontWeight('h3')};
  font-size: ${getFontSize('h3')};
  line-height: ${getLineHeight('h3')};
  letter-spacing: ${getLetterSpacing('h3')};
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
`;

export const H4 = styled.h4`
  font-weight: ${getFontWeight('h4')};
  font-size: ${getFontSize('h4')};
  line-height: ${getLineHeight('h4')};
  letter-spacing: ${getLetterSpacing('h4')};
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
`;

export const H5 = styled.h5`
  font-weight: ${getFontWeight('h5')};
  font-size: ${getFontSize('h5')};
  line-height: ${getLineHeight('h5')};
  letter-spacing: ${getLetterSpacing('h5')};
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
`;

export const BodyText = styled.p`
  font-weight: ${getFontWeight('body')};
  font-size: ${getFontSize('body')};
  line-height: ${getLineHeight('body')};
  letter-spacing: ${getLetterSpacing('body')};
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
`;

export const SmallBodyText = styled.p`
  font-weight: ${getFontWeight('bodySmall')};
  font-size: ${getFontSize('bodySmall')};
  line-height: ${getLineHeight('bodySmall')};
  letter-spacing: ${getLetterSpacing('bodySmall')};
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
`;
