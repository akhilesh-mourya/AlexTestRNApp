import {useAppSelector} from '../store';
import {Messages} from './type';

export const useChatState = () => {
  const data: [Messages] | [] = useAppSelector(state => state.chat.data);
  const loggedInUserId: number = useAppSelector(
    state => state.chat.loggedInUserId,
  );
  const nextCursor: number | null = useAppSelector(
    state => state.chat.nextCursor,
  );
  return {data, nextCursor, loggedInUserId};
};
