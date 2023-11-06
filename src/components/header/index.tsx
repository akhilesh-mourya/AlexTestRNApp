import {Block, HeaderTitle, MainContainer, RightIcon} from './styles';
import React, {FC} from 'react';

interface HeaderProps {
  title?: string;
  rightIcon?: boolean;
  onRightIconClick?: any;
}

const Header: FC<HeaderProps> = React.memo(props => {
  const {title, onRightIconClick = () => {}, rightIcon = false} = props;

  return (
    <MainContainer>
      <HeaderTitle>{title}</HeaderTitle>
      <Block />
      {rightIcon && <RightIcon onPress={() => onRightIconClick()} />}
    </MainContainer>
  );
});
//${YourInvitations.PERMISSION}
export default Header;
