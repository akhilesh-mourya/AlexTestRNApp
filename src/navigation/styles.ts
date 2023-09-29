import {
  CAP_ICON,
  CHAT_ICON_NEW,
  Calendar_Family_Member_Icon,
  Calendar_Type_Change_Icon,
  FILTER_DRAWER_ICON,
  TEAM_ICON,
  TROPHY_ICON,
} from './../assets/svgs/index';
import {NHTextMXL} from './../components/atoms/NHText';
import styled from 'styled-components/native';
import {Platform, StyleSheet} from 'react-native';
import {color, layout, space} from 'styled-system';
import {
  moderateScale,
  scale,
  verticalScale,
} from 'react-native-size-matters/extend';
import {SvgXml} from 'react-native-svg';
import {
  CHAT_ICON,
  HMENU_ICON,
  HOME_ICON,
  MENU_OPTION_ICON,
  TAB_CALENDAR_ICON,
} from '../assets/svgs';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {FontFamily, Size, Type} from 'custom_enums';
import Tooltip from 'react-native-walkthrough-tooltip';
import NHButton from '../components/atoms/NHButton';
import EnIcon from 'react-native-vector-icons/Entypo';
import NHIconButton from '../components/atoms/NHIconButton';
import {IconType} from '../constants/stringConstants';
import {SettingSVG} from '../assets/svgs/menuSvgs';

export const TabBarContainer = styled.View.attrs(props => ({
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  height: verticalScale(75),
  backgroundColor: props?.theme.colors.white,
  shadowColor:
    Platform.OS === 'ios' ? 'rgba(0, 0, 0, 0.2)' : props?.theme.colors.black,
  shadowOffset: {
    width: 0,
    height: 12,
  },
  shadowOpacity: 0.58,
  shadowRadius: 16,
  elevation: 24,
  paddingBottom: verticalScale(15),
}))`
  ${color}
`;

export const RightNavContainer = styled.View.attrs(() => ({
  flexDirection: 'row',
  alignItems: 'center',
}))`
  ${color}
  ${space}
  ${layout}
`;

export const TabItemTouchable = styled.TouchableOpacity.attrs(() => ({
  flex: 1,
  alignItems: 'center',
  accessibilityRole: 'button',
}))``;

export const HomeRightHeaderTouchable = styled.TouchableOpacity.attrs(() => ({
  width: moderateScale(50),
  height: moderateScale(50),
  mr: verticalScale(10),
}))`
  align-items: center;
  justify-content: center;
  ${color}
  ${space}
  ${layout}
`;

export const BackTitleTouchable = styled.TouchableOpacity.attrs(() => ({
  flex: 1,
  accessibilityRole: 'button',
}))`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${space}
`;

export const TabItemContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const TabItemText = styled.Text.attrs(props => ({
  color: props.isActive
    ? props.theme.colors.primary
    : props.theme.colors.placeholder,
  fontSize: moderateScale(10),
}))`
  font-weight: ${props => `${props.isActive ? 600 : 400}`};
  margin-top${verticalScale(2)}px;
  ${color}
`;

export const MenuIcon = styled(SvgXml).attrs(props => ({
  xml: HMENU_ICON(props.theme.colors.black),
  ml: verticalScale(15),
}))`
  ${color}
  ${space}
  ${layout}
`;

export const BackIcon = styled(Icon).attrs((props: any) => ({
  ml: verticalScale(10),
  size: moderateScale(30),
  name: 'chevron-back',
  color: props?.light ? props.theme.colors.white : props.theme.colors.black,
}))`
  ${color}
  ${space}
  ${layout}
`;

export const BellIcon = styled(MaterialIcon).attrs(() => ({
  size: moderateScale(24),
  name: 'bell-outline',
  color: 'black',
}))`
  ${color}
  ${space}
  ${layout}
`;

export const ThreeDotIcon = styled(SvgXml).attrs(() => ({
  xml: MENU_OPTION_ICON,
}))`
  ${color}
  ${space}
  ${layout}
`;

export const CalendarFamilyMemberIcon = styled(SvgXml).attrs(() => ({
  xml: Calendar_Family_Member_Icon,
}))`
  ${color}
  ${space}
  ${layout}
`;

export const CalendarTypeChangeIcon = styled(SvgXml).attrs(() => ({
  xml: Calendar_Type_Change_Icon,
}))`
  ${color}
  ${space}
  ${layout}
`;

export const HeaderSettingIcon = styled(SvgXml).attrs(() => ({
  xml: SettingSVG,
}))`
  ${color}
  ${space}
  ${layout}
`;

export const AddressIcon = styled(EnIcon).attrs(() => ({
  name: 'address',
  size: moderateScale(25),
  color: '#000',
}))`
  ${color}
  ${space}
  ${layout}
`;

export const FilterDrawerIcon = styled(SvgXml).attrs(() => ({
  xml: FILTER_DRAWER_ICON(),
  mr: verticalScale(20),
}))`
  ${color}
  ${space}
  ${layout}
`;

export const HomeIcon = styled(SvgXml).attrs(props => ({
  xml: HOME_ICON(props.color),
}))`
  ${color}
  ${space}
  ${layout}
`;

export const GroupIcon = styled(SvgXml).attrs(props => ({
  xml: TEAM_ICON(props.color),
}))`
  ${color}
  ${space}
  ${layout}
`;

export const ChatIcon = styled(SvgXml).attrs(props => ({
  xml: CHAT_ICON(props.color),
}))`
  ${color}
  ${space}
  ${layout}
`;

export const ChatIconNew = styled(SvgXml).attrs(props => ({
  xml: CHAT_ICON_NEW(props.color),
}))`
  ${color}
  ${space}
  ${layout}
`;

export const Calander_Icon = styled(SvgXml).attrs(props => ({
  xml: TAB_CALENDAR_ICON(props.color),
}))`
  ${color}
  ${space}
  ${layout}
`;

export const Program_Icon = styled(SvgXml).attrs(props => ({
  xml: TROPHY_ICON(props.color),
}))`
  ${color}
  ${space}
  ${layout}
`;

export const DeshboardCapIcon = styled(SvgXml).attrs(() => ({
  xml: CAP_ICON(scale(30)),
}))`
  ${color}
  ${space}
  ${layout}
`;

export const HomeTooltipContainer = styled.View.attrs(() => ({
  width: verticalScale(180),
}))`
  padding: ${verticalScale(5)}px;

  ${space}
  ${layout}
`;

export const HomeTooltipText = styled(NHButton).attrs(props => ({
  color: props.theme.colors.white,
  margin: verticalScale(12),
  fontFamily: FontFamily.SemiBold,
  type: Type.Tooltip,
}))`
  align-self: flex-start;
  ${color}
  ${space}
`;

export const CreateNewChatBtn = styled(NHButton).attrs(() => ({
  type: Type.Secondary,
  fontFamily: FontFamily.SemiBold,
  btnSize: Size.Flexible,
  mr: verticalScale(20),
  px: scale(23),
}))`
  padding-vertical: ${verticalScale(8)}px;
  ${color}
  ${space}
  ${layout}
`;

export const BackButtonText = styled(NHTextMXL).attrs((props: any) => ({
  color: props?.light ? props.theme.colors.white : props.theme.colors.black,
  fontFamily: FontFamily.SemiBold,
}))`
  margin-left: ${verticalScale(4)}px;
  ${color}
  ${space}
`;

export const AddPaymentMethodTooltip = styled(Tooltip).attrs(props => ({
  backgroundColor: props.theme.colors.clear,
  placement: 'bottom',
  showChildInTooltip: false,
  disableShadow: true,
  contentStyle: {
    padding: 0,
    backgroundColor: props.theme.colors.headingTextBG,
  },
}))`
  ${space}
  ${layout}
  ${color}
`;

export const TabTitleStyle = {
  fontSize: moderateScale(10, 0.5),
  fontFamily: FontFamily.SemiBold,
  marginVertical: verticalScale(2),
};

export const ChatLeftSpace = styled.TouchableOpacity.attrs(() => ({
  flex: 1,
  alignItems: 'center',
  accessibilityRole: 'button',
}))`
  margin-left: ${verticalScale(5)}px;
  ${space}
`;

export const CloseButton = styled(NHIconButton).attrs(props => ({
  btnSize: Size.Small,
  icon: 'close',
  iconSize: moderateScale(18),
  iconType: IconType.MATERIAL,
  color: props.theme.colors.programAddress,
  bg: props.theme.colors.cultured,
  width: moderateScale(32),
  height: moderateScale(32),
}))`
  margin-horizontal: ${moderateScale(8)}px;
  ${color}
  ${space}
  ${layout}
`;

export const styles = StyleSheet.create({
  HeaderStyle: {fontSize: moderateScale(18)},
});
