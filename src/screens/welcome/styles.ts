import styled from 'styled-components/native';
import {color} from 'styled-system';

import theme from '../../theme';

export const Container = styled.View.attrs(props => ({
  flex: 1,
  bg: theme.colors.white,
}))`
  ${color}
`;
