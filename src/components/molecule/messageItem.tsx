import {
  AvatarImg,
  Text,
  MessageContainer,
  MainContainer,
  SubContainer,
  AvatarBlank,
  BGGradient,
} from './styles';
import React, {FC} from 'react';
import {StructuredProps} from '../../enums';

interface MessageItemProps {
  text?: string;
  avatar?: string;
  left?: boolean;
  index: number;
  restructureMessageData: StructuredProps[] | undefined;
  sectionIndex?: number;
}

const MessageItem: FC<MessageItemProps> = React.memo(props => {
  const {
    text,
    avatar,
    left = false,
    index,
    sectionIndex,
    restructureMessageData,
  } = props;

  const isAdjecentItem = () => {
    if (index - 1 >= 0) {
      const isAdj =
        restructureMessageData[sectionIndex]?.data[index]?.user?._id ===
        restructureMessageData[sectionIndex]?.data[index - 1].user?._id;
      return isAdj;
    }
    return false;
  };

  return (
    <MainContainer left={left} isAdjecentItem={isAdjecentItem()}>
      <SubContainer>
        {left && !isAdjecentItem() ? (
          <AvatarImg source={{uri: avatar}} />
        ) : (
          left && <AvatarBlank />
        )}
        {left && (
          <MessageContainer>
            <Text left={left}>{text}</Text>
          </MessageContainer>
        )}
        {!left && (
          <BGGradient>
            <Text>{text}</Text>
          </BGGradient>
        )}
      </SubContainer>
    </MainContainer>
  );
});
export default MessageItem;
