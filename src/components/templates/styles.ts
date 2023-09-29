import {ViewStyle} from 'react-native';
import {
  verticalScale,
  moderateScale,
  scale,
} from 'react-native-size-matters/extend';
import {SvgXml} from 'react-native-svg';
import styled from 'styled-components/native';
import {color, border, layout, space} from 'styled-system';
import {CAP_ICON, CHECK_ICON, NATTY_HATTY_ICON} from '../../assets/svgs';

export const AuthContainer = styled.View.attrs(props => ({
  flex: 1,
  bg: props.theme.colors.white,
}))`
  ${layout}
  ${color}
  ${border}
`;
export const SuccessContainer = styled.View.attrs(props => ({
  flex: 1,
  bg: props.theme.colors.white,
}))`
  ${layout}
  ${color}
  ${border}
`;

export const BodyContainer = styled.View.attrs(props => ({
  bg: props.theme.colors.white,
  flex: 1,
  mt: verticalScale(-50),
  ml: scale(9),
  mr: scale(9),
  borderRadius: moderateScale(20),
}))`
  flex: 1;
  ${layout}
  ${space}
  ${color}
  ${border}
`;

export const ScrollView = styled.ScrollView.attrs(props => ({
  bg: props.theme.colors.white,
}))`
  ${color}
`;

export const InnerContainer: ViewStyle = {};

export const SuccessLogoContainer = styled.View.attrs(props => ({
  bg: props.theme.colors.secondary,
  height: verticalScale(302),
}))`
  align-items: center;
  ${layout} ${space} ${color};
`;

export const CheckIcon = styled(SvgXml).attrs(() => ({
  xml: CHECK_ICON(),
  mt: verticalScale(80),
}))`
  ${color} ${space} ${layout};
`;

export const CapIcon = styled(SvgXml).attrs(() => ({
  xml: CAP_ICON(),
  mt: verticalScale(89),
}))`
  align-self: center;
  ${color} ${space} ${layout};
`;

export const NattyHattyIcon = styled(SvgXml).attrs(() => ({
  xml: NATTY_HATTY_ICON(),
  mt: verticalScale(16),
}))`
  ${color} ${space} ${layout};
`;
