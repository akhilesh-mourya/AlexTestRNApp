import {SvgXml} from 'react-native-svg';
import styled from 'styled-components/native';
import {color, layout, space, border} from 'styled-system';
import {PLUS_ICON} from '../../assets/svg';
import {scale} from 'react-native-size-matters/extend';
import {verticalScale} from 'react-native-size-matters/extend';
import {moderateScale} from 'react-native-size-matters';
import {FontFamily} from 'custom_enums';

export const MainContainer = styled.View.attrs(() => ({
  mt: verticalScale(16),
}))`
  flex-direction: row;
  align-items: center;
  ${color};
  ${space};
  ${layout};
  ${border};
`;

export const Block = styled.View.attrs(() => ({}))`
  align-items: center;
  ${color}
  ${space}
  ${layout}
`;

export const PlusIcon = styled(SvgXml).attrs<any>(() => ({
  xml: PLUS_ICON,
  ml: scale(16),
}))`
  ${color}
  ${space}
  ${layout}
`;

export const MessageInput = styled.TextInput.attrs(props => ({
  color: props.theme.colors.white,
  placeholderTextColor: '#B4B4B4',
  placeholder: 'Send a message',
  borderRadius: moderateScale(32),
  borderWidth: 1,
  borderColor: '#5E5E5E',
  height: verticalScale(37),
  bg: '#0E042280',
  flex: 1,
  ml: scale(8),
  pl: scale(16),
}))`
  font-size: ${moderateScale(14.5, 0.5)}px;
  font-weight: 500;
  font-family: ${FontFamily.Regular};
  ${color}
  ${space}
  ${layout}
`;

export const AvatarImg = styled.Image.attrs(() => ({
  width: scale(32),
  height: scale(32),
  borderRadius: scale(16),
  ml: scale(16),
}))`
  ${color}
  ${space}
  ${layout}
`;

export const Separator = styled.View.attrs((props) => ({
  mt: verticalScale(16),
  height: verticalScale(1),
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
