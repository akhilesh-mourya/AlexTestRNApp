import {NavigationProp, useNavigation} from '@react-navigation/native';
import {debounce} from 'lodash';
import React, {FC, useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import TeamChatListItem from '../../../components/molecules/teamChatListItem';
import {ChatStr} from '../../../constants/stringConstants';
import {actionCable, cableObj} from '../../../customHooks/useActionCable';
import useChannel from '../../../customHooks/useChannel';
import {ChatScreenKey} from '../../../enums';
import {
  useGetChatRoomsQuery,
  useSetPrimaryChatroomMutation,
} from '../../../redux/chat/api';
import {
  setIsNewDirectMessage,
  setMemberCount,
  setMeta,
  updateDirectChatList,
} from '../../../redux/chat/reducer';
import {ChatProps} from '../../../redux/chat/type';
import {useAppDispatch, useAppSelector} from '../../../redux/store';

import {
  Button,
  ChatIcon,
  ClubButton,
  Container,
  CreateNewChatTooltip,
  FacilityButton,
  GroupButton,
  NoChatContainer,
  NoChatTitle,
  SearchBar,
  SearchBarContainer,
  ToolTipContainer,
  ToolTipContentContainer,
} from './styles';
import {filterTableRowHandler} from '../../../utility/utility';

export const DirectMassage: FC<{}> = () => {
  const navigation: NavigationProp<any, any> = useNavigation();
  const chatStates: ChatProps = useAppSelector(state => state.chat);

  const [toolTipVisible, setToolTipVisible] = useState(false);
  const [toolTipVisibleFirstTime, setToolTipVisibleFirstTime] = useState(true);
  const [page, setPage] = useState(1);

  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useAppDispatch();
  const {subscribe} = useChannel(actionCable, cableObj);

  const {chatrooms_direct, meta, refresh} = chatStates;
  const [chatListRefresh, setChatListRefresh] = useState(refresh);
  const [setPrimaryChatroom] = useSetPrimaryChatroomMutation();
  const [swapRefreshing, setSwapRefreshing] = useState(false);

  useGetChatRoomsQuery(
    {pageNo: page, refresh: chatListRefresh || swapRefreshing},
    {
      refetchOnMountOrArgChange: true,
    },
  );

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      const chatRefresh = !chatListRefresh;
      setChatListRefresh(chatRefresh);
    });
    return unsubscribe;
  }, [navigation, chatListRefresh]);

  useEffect(() => {
    setPage(1);
    setChatListRefresh(refresh);
  }, [refresh]);

  const filteredContacts = filterTableRowHandler(chatrooms_direct, searchQuery);

  useEffect(() => {
    return () => {
      dispatch(setMeta());
    };
  }, [dispatch]);

  const loadMore = () => {
    if (meta?.is_next_page) {
      const _page = page + 1;
      setPage(_page);
    }
  };

  const onChatItemPress = async (chatItem: any) => {
    await setPrimaryChatroom({
      chatroom_uuid: chatItem?.uuid,
    });

    const newDirectMsgList = [...chatrooms_direct];
    newDirectMsgList[
      chatrooms_direct.findIndex(i => i.id === chatItem.id)
    ].is_get_new_message = false;

    dispatch(updateDirectChatList(newDirectMsgList));
    const index = chatrooms_direct.findIndex(
      i => i.id !== chatItem.id && i.is_get_new_message,
    );
    dispatch(setIsNewDirectMessage({isNew: index !== -1}));
    dispatch(setMemberCount({memberCount: chatItem?.participants_count || 0}));
    navigation.navigate(ChatScreenKey.ChatConversationScreen, {
      chatData: chatItem,
    });
  };

  const onRefresh = () => {
    setSwapRefreshing(!swapRefreshing);
  };
  const renderListItem = item => {
    return (
      <TeamChatListItem
        chatData={chatrooms_direct}
        item={item}
        onCardPress={onChatItemPress}
        subscribeEvent={subscribe}
        dispatch={dispatch}
      />
    );
  };
  const renderNewChatOptions = () => {
    return (
      <ToolTipContentContainer>
        <ClubButton
          onPress={() => {
            setToolTipVisible(!toolTipVisible);
            setTimeout(() => {
              navigation.navigate(ChatScreenKey.SelectClubForNewChatScreen);
            }, 1);
          }}
        />
        <FacilityButton
          onPress={() => {
            setToolTipVisible(!toolTipVisible);
            setTimeout(() => {
              navigation.navigate(ChatScreenKey.SelectFacilityForNewChatScreen);
            }, 1);
          }}
        />
        <GroupButton
          onPress={() => {
            setToolTipVisible(!toolTipVisible);
            setTimeout(() => {
              navigation.navigate(ChatScreenKey.CreteNewGroupScreen);
            }, 1);
          }}
        />
      </ToolTipContentContainer>
    );
  };
  return (
    <Container>
      <SearchBarContainer>
        <SearchBar
          onChangeText={debounce(setSearchQuery, 300)}
          placeholder={ChatStr.SEARCH_PLACEHOLDER}
        />
      </SearchBarContainer>
      {filteredContacts && filteredContacts?.length > 0 ? (
        <FlatList
          data={filteredContacts}
          renderItem={({item}) => renderListItem(item)}
          onEndReached={loadMore}
          onRefresh={onRefresh}
          refreshing={false}
          keyExtractor={item => {
            return item?.id;
          }}
        />
      ) : (
        <NoChatContainer>
          <ChatIcon />
          <NoChatTitle>{ChatStr.SELECT_OR_START}</NoChatTitle>
        </NoChatContainer>
      )}
      <ToolTipContainer>
        <CreateNewChatTooltip
          toolTipVisibleFirstTime={toolTipVisibleFirstTime}
          isVisible={toolTipVisible}
          content={renderNewChatOptions()}
          onClose={() => setToolTipVisible(!toolTipVisible)}>
          <Button
            title={ChatStr.Create_New_Chat}
            onPress={() => {
              setToolTipVisible(!toolTipVisible);
              if (toolTipVisibleFirstTime) {
                setTimeout(() => {
                  setToolTipVisibleFirstTime(!toolTipVisibleFirstTime);
                }, 1000);
              }
            }}
          />
        </CreateNewChatTooltip>
      </ToolTipContainer>
    </Container>
  );
};

export default DirectMassage;
