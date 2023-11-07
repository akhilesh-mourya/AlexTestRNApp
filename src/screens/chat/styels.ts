import styled from 'styled-components/native';
import {color, layout, space} from 'styled-system';
import {scale, verticalScale} from 'react-native-size-matters/extend';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {moderateScale} from 'react-native-size-matters/extend';
import {Dimensions} from 'react-native';
import {FontFamily} from 'custom_enums';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const MainContainer = styled.View.attrs(props => ({
  flex: 1,
  bg: props.theme.colors.primary,
}))`
  ${color} ${layout} ${space};
`;

export const SafeAreaContainer = styled.SafeAreaView.attrs(() => ({
  flex: 1,
}))`
  ${color} ${layout} ${space};
`;

export const Container = styled(KeyboardAwareScrollView).attrs(() => ({
  flex: 1,
  contentContainerStyle: {flex: 1},
  paddingHorizontal: scale(16),
  paddingBottom: verticalScale(16),
  keyboardShouldPersistTaps: 'always',
  enableAutomaticScroll: true,
  enableOnAndroid: true,
  bounces: false,
}))`
  ${color}
  ${space}
`;

export const BgGradiantImage = styled.Image.attrs(() => ({
  width: windowWidth,
  height: windowHeight,
}))`
  flex: 1;
  position: absolute;
  ${color} ${layout} ${space};
`;

export const HeaderTitle = styled.Text.attrs(props => ({
  color: props.theme.colors.white,
  fontSize: moderateScale(13, 0.5),
  mt: verticalScale(16),
  mb: verticalScale(16),
}))`
  font-weight: 500;
  align-self: center;
  font-family: ${FontFamily.Regular};
  ${color}
  ${space}
`;
