import {Dimensions} from 'react-native';
import {verticalScale} from 'react-native-size-matters/extend';
import {SvgXml} from 'react-native-svg';
import Tooltip from 'react-native-walkthrough-tooltip';
import styled from 'styled-components/native';
import {color, layout, space} from 'styled-system';
import {CHAT_ICON} from '../../../assets/svgs';
import NHButton from '../../../components/atoms/NHButton';
import NHInput from '../../../components/atoms/NHInput';
import {NHTextMXL} from '../../../components/atoms/NHText';
import {FontFamily, Size, Type} from '../../../enums';
const windowWidth = Dimensions.get('window').width;

export const Container = styled.View.attrs(props => ({
  flex: 1,
  backgroundColor: props.theme.colors.white,
}))`
  padding-horizontal: ${verticalScale(25)}px;
  ${space};
`;

export const TabsContainer = styled.View.attrs(props => ({
  mt: verticalScale(10),
  bg: props.theme.colors.clear,
}))`
  flex: 1;
  ${space}
  ${color}
  ${layout}
`;

export const NoChatContainer = styled.View.attrs(() => ({}))`
  align-items: center;
  justify-content: center;
  flex: 1;
  ${space} ${color} ${layout};
`;

export const ChatIcon = styled(SvgXml).attrs(props => ({
  xml: CHAT_ICON(props.color),
}))`
  ${color} ${space} ${layout};
`;

export const NoChatTitle = styled(NHTextMXL).attrs(props => ({
  color: props.theme.colors.placeholder,
  fontFamily: FontFamily.Regular,
  mt: verticalScale(22),
}))`
  ${color}
  ${space}
`;

export const ToolTipContainer = styled.View.attrs(() => ({
  mt: verticalScale(10),
}))`
  ${color}
  ${space}
  ${layout}
`;

export const CreateNewChatTooltip = styled(Tooltip).attrs(props => ({
  backgroundColor: props.theme.colors.clear,
  placement: 'top',
  showChildInTooltip: false,
  disableShadow: true,
  contentStyle: {
    padding: 0,
    backgroundColor: props.toolTipVisibleFirstTime
      ? props.theme.colors.clear
      : props.theme.colors.headingTextBG,
  },
  tooltipStyle: props.toolTipVisibleFirstTime
    ? {
        height: 0,
      }
    : {
        width: windowWidth - verticalScale(50),
      },
}))`
  ${space}
  ${layout}
  ${color}
`;

export const ToolTipContentContainer = styled.View.attrs(props => ({
  flex: 1,
  bg: props.theme.colors.headingTextBG,
}))`
  flex: 1;
  flex-direction: row;
  ${color}
  ${space}
  ${layout}
`;

export const Button = styled(NHButton).attrs(() => ({
  type: Type.Secondary,
  fontFamily: FontFamily.Medium,
  btnSize: Size.Large,
  mb: verticalScale(20),
}))`
  ${color}
  ${space}
  ${layout}
`;

export const ClubButton = styled(NHButton).attrs(() => ({
  type: Type.Tooltip,
  fontFamily: FontFamily.Medium,
  btnSize: Size.Large,
  title: 'Club',
}))`
  flex: 1;
  ${color}
  ${space}
  ${layout}
`;

export const FacilityButton = styled(NHButton).attrs(() => ({
  type: Type.Tooltip,
  fontFamily: FontFamily.Medium,
  btnSize: Size.Large,
  title: 'Facilty',
}))`
  flex: 1;
  ${color}
  ${space}
  ${layout}
`;

export const GroupButton = styled(NHButton).attrs(() => ({
  type: Type.Tooltip,
  fontFamily: FontFamily.Medium,
  btnSize: Size.Large,
  title: 'Group',
}))`
  flex: 1;
  ${color}
  ${space}
  ${layout}
`;

export const SearchBar = styled(NHInput).attrs(() => ({
  type: Type.Text,
  fontFamily: FontFamily.Medium,
  autoCapitalize: 'none',
}))`
  ${space} ${layout} ${color};
`;

export const SearchBarContainer = styled.View.attrs(() => ({
  my: verticalScale(20),
}))`
  ${space} ${layout} ${color};
`;
