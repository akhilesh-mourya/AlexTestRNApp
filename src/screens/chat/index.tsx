import React, {useState, useEffect, FC} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {
  renderInputToolbar,
  renderActions,
  renderComposer,
  renderSend,
} from './InputToolbar';
import {
  renderAvatar,
  renderBubble,
  renderSystemMessage,
  renderMessage,
  renderMessageText,
  renderCustomView,
} from './messageContainer';
import initialMessages from './messages';

import {SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {BgGradiantImage, Container} from './styels';
import {CHAT_GRADIENT} from '../../constants/imageConstants';

export const Chat: FC<{}> = () => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState(initialMessages.reverse());

  useEffect(() => {
    setMessages(initialMessages.reverse());
  }, []);

  const onSend = (newMessages = []) => {
    setMessages(prevMessages => GiftedChat.append(prevMessages, newMessages));
  };

  return (
    <Container>
      <LinearGradient
        colors={['#1B1B1B', '#2C1E31']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        useAngle={true}
        angle={0}
        style={{
          flex: 1,
        }}>
        <BgGradiantImage source={CHAT_GRADIENT} />
        <GiftedChat
          messages={messages}
          onSend={messages => onSend(messages)}
          user={{
            _id: 1,
          }}
        />
      </LinearGradient>
    </Container>
  );
};
