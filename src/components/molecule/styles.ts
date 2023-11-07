import {moderateScale, verticalScale} from 'react-native-size-matters/extend';
import styled from 'styled-components/native';
import {color, layout, space, border} from 'styled-system';
import {scale} from 'react-native-size-matters/extend';
import theme from '../../theme';
import {Dimensions} from 'react-native';
import {FontFamily} from 'custom_enums';
import LinearGradient from 'react-native-linear-gradient';

const windowWidth = Dimensions.get('window').width;

export const MainContainer: any = styled.View.attrs(props => ({
  justifyContent: props.left ? 'flex-start' : 'flex-end',
  mb: verticalScale(!props?.isAdjecentItem ? 8 : 0),
  mt: verticalScale(8),
}))`
  flex-direction: row;
  ${color};
  ${space};
  ${layout};
  ${border};
`;

export const SubContainer = styled.View.attrs(() => ({
  maxWidth: (windowWidth * 70) / 100,
}))`
  flex-direction: row;
  align-items: flex-end;
  ${color};
  ${space};
  ${layout};
  ${border};
`;

export const Block = styled.View.attrs(() => ({
  flex: 1,
}))`
  ${color}
  ${space}
  ${layout}
`;

export const AvatarImg = styled.Image.attrs(() => ({
  width: scale(32),
  height: scale(32),
  borderRadius: scale(16),
}))`
  ${color}
  ${space}
  ${layout}
`;

export const AvatarBlank = styled.View.attrs(() => ({
  width: scale(32),
  height: scale(32),
  borderRadius: scale(16),
}))`
  ${color}
  ${space}
  ${layout}
`;

export const MessageContainer = styled.View.attrs(() => ({
  px: scale(10),
  ml: scale(8),
  py: verticalScale(8),
  bg: '#F5F6FB',
  borderRadius: moderateScale(16),
}))`
  ${color};
  ${space};
  ${layout};
  ${border};
`;
export const Text: any = styled.Text.attrs(props => ({
  color: props.left ? theme.colors.msgText : theme.colors.white,
}))`
  font-family: ${FontFamily.Regular};
  ${color}
  ${space}
`;

export const BGGradient: any = styled(LinearGradient).attrs(props => ({
  colors: props.theme.colors.messageGradient,
  useAngle: true,
  angle: 87,
  paddingHorizontal: 10,
  paddingVertical: 8,
  borderRadius: moderateScale(16),
}))`
  ${color}
  ${space}
`;
