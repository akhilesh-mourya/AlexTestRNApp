import React, {useState, useEffect, FC, useMemo} from 'react';
import {SectionList} from 'react-native';
import {
  BgGradiantImage,
  Block,
  Container,
  HeaderTitle,
  MainContainer,
  SafeAreaContainer,
} from './styels';
import {CHAT_GRADIENT} from '../../constants/imageConstants';
import {useGetChatsQuery} from '../../redux/chat/api';
import {useChatState} from '../../redux/chat/useChatState';
import {Messages} from '../../redux/chat/type';
import MessageItem from '../../components/molecule/messageItem';
import Header from '../../components/header';
import Footer from '../../components/footer';
import {MessageSectionItemProps} from '../../enums';
import {getSectionMessages} from '../../utility';

const ChatScreen: FC<{}> = () => {
  const [messages, setMessages] = useState<Messages[]>([]);
  const [nextCursorValue, setNextCursor] = useState<number | null>(null);
  const {data, nextCursor, loggedInUserId} = useChatState();

  useGetChatsQuery(
    {nextCursor: nextCursorValue},
    {
      refetchOnMountOrArgChange: true,
    },
  );

  useEffect(() => {
    data && setMessages(data);
  }, [data]);

  const restructureMessageData = useMemo(() => {
    if (messages && messages.length > 0) {
      return getSectionMessages(messages);
    }
  }, [messages]);

  const onLoadEarlierMessages = () => {
    if (nextCursor) {
      setNextCursor(nextCursor);
    }
  };

  const renderMessageItem = ({item, index}: MessageSectionItemProps) => {
    return (
      <MessageItem
        avatar={item?.user?.avatar}
        text={item?.text}
        left={item?.user?._id !== loggedInUserId}
        index={index}
        restructureMessageData={restructureMessageData}
        sectionIndex={item?.sectionIndex}
      />
    );
  };

  const renderSectionHeader = (title: string) => {
    return <HeaderTitle>{title}</HeaderTitle>;
  };

  return (
    <MainContainer>
      <BgGradiantImage source={CHAT_GRADIENT} />
      <SafeAreaContainer>
        <Header />
        <Container>
          {restructureMessageData ? (
            <SectionList
              sections={restructureMessageData}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              renderItem={renderMessageItem}
              keyExtractor={(item, index) => `${item._id}_${index}`}
              onEndReached={onLoadEarlierMessages}
              renderSectionFooter={({section: {title}}) =>
                renderSectionHeader(title)
              }
              inverted
            />
          ) : (
            <Block />
          )}
          <Footer />
        </Container>
      </SafeAreaContainer>
    </MainContainer>
  );
};

export default ChatScreen;
