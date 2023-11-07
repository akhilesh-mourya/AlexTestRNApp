import {useNavigation} from '@react-navigation/native';
import {useChatState} from '../../redux/chat/useChatState';
import {
  AvatarImg,
  Block,
  BackIcon,
  MainContainer,
  HeaderTitle,
  Separator,
  Touchable,
} from './styles';
import React, {FC} from 'react';

interface HeaderProps {
  title?: string;
  isBack?: boolean;
}

const Header: FC<HeaderProps> = React.memo(props => {
  const {data, loggedInUserId} = useChatState();
  const avatar = data.filter(item => item?.user?._id !== loggedInUserId);
  const {title = avatar[0]?.user?.name, isBack = true} = props;
  const navigation = useNavigation();

  const onBackPress = () => {
    navigation.goBack();
  };

  return (
    <MainContainer>
      <Block>
        {isBack && (
          <Touchable onPress={onBackPress}>
            <BackIcon />
          </Touchable>
        )}
        <AvatarImg source={{uri: avatar[0]?.user?.avatar}} />
        <HeaderTitle>{title}</HeaderTitle>
      </Block>
      <Separator />
    </MainContainer>
  );
});
export default Header;
