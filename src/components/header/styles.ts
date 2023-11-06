import {Size, Type} from 'custom_enums';
import {moderateScale, verticalScale} from 'react-native-size-matters/extend';
import styled from 'styled-components/native';
import {color, layout, space, border} from 'styled-system';
import {IconType} from '../../../constants/stringConstants';
import NHIconButton from '../../atoms/NHIconButton';
import {NHTextXLL} from '../../atoms/NHText';

export const MainContainer = styled.TouchableOpacity.attrs(() => ({}))`
  flex: 1;
  flex-direction: row;
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
export const HeaderTitle = styled(NHTextXLL).attrs(props => ({
  color: props.theme.colors.black,
  type: Type.Medium,
  ml: verticalScale(27),
}))`
  font-weight: 500;
  ${color}
  ${space}
`;

export const RightIcon = styled(NHIconButton).attrs(() => ({
  btnSize: Size.Medium,
  icon: 'dots-three-horizontal',
  iconSize: moderateScale(29),
  iconType: IconType.ENTYPO,
  mr: verticalScale(25),
}))`
  ${color}
  ${space}
  ${layout}
`;
