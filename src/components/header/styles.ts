import {SvgXml} from 'react-native-svg';
import styled from 'styled-components/native';
import {color, layout, space, border} from 'styled-system';
import {BACK_ARROW_ICON} from '../../assets/svg';
import {scale} from 'react-native-size-matters/extend';
import {verticalScale} from 'react-native-size-matters/extend';
import {moderateScale} from 'react-native-size-matters';
import {FontFamily} from 'custom_enums';
import {StatusBar} from 'react-native';

export const MainContainer = styled.View.attrs(() => ({
  mt: StatusBar?.currentHeight > 24 && verticalScale(16),
}))`
  ${color};
  ${space};
  ${layout};
  ${border};
`;

export const Block = styled.View.attrs(() => ({}))`
  flex-direction: row;
  align-items: center;
  ${color}
  ${space}
  ${layout}
`;

export const BackIcon = styled(SvgXml).attrs<any>(() => ({
  xml: BACK_ARROW_ICON,
  ml: scale(16),
}))`
  ${color}
  ${space}
  ${layout}
`;

export const HeaderTitle = styled.Text.attrs(props => ({
  color: props.theme.colors.white,
  ml: scale(16),
}))`
  font-size: ${moderateScale(24, 0.5)}px;
  font-family: ${FontFamily.Bold};
  ${color}
  ${space}
  ${layout}
`;

export const AvatarImg = styled.Image.attrs(() => ({
  width: scale(40),
  height: scale(40),
  borderRadius: scale(20),
  ml: scale(16),
}))`
  ${color}
  ${space}
  ${layout}
`;

export const Separator = styled.View.attrs(props => ({
  mt: verticalScale(16),
  height: 0.8,
  bg: props.theme.colors.inputBG,
}))`
  ${color}
  ${space}
  ${layout}
`;

export const Touchable = styled.TouchableOpacity.attrs(() => ({}))`
  ${color}
  ${space}
  ${layout}
`;
