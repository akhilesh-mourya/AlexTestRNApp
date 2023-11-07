import {MainContainer, PlusIcon, MessageInput, Touchable} from './styles';
import React, {FC} from 'react';

interface FooterProps {
  onPlusPress?: () => void;
  onTextChange?: () => void;
}

const Footer: FC<FooterProps> = React.memo(() => {
  return (
    <MainContainer>
      <Touchable>
        <PlusIcon />
      </Touchable>
      <MessageInput />
    </MainContainer>
  );
});
export default Footer;
