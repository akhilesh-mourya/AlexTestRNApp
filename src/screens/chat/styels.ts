import styled from 'styled-components/native';
import {border, color, layout, position, space} from 'styled-system';
import theme from '../../theme';
import {scale, verticalScale} from 'react-native-size-matters/extend';

export const Container = styled.View.attrs(() => ({
  flex: 1,
  bg: theme.colors.primary,
}))`
  ${color}
  ${space}
`;
export const BgGradiantImage = styled.Image.attrs(() => ({
  width: scale(334),
  height: verticalScale(340.93),
}))`
  flex: 1;
  position: absolute;
  top: ${verticalScale(-42)}px;
  left: ${scale(-91)}px;
  flex-shrink: 0;
  ${color} ${layout} ${space};
`;
