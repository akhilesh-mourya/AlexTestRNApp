import {api} from '../../services/api';

export const ChatApi = api.injectEndpoints({
  endpoints: build => ({
    getChats: build.query<any, any>({
      query: (args: any) => {
        const nextCursor = args?.nextCursor;
        const url = nextCursor ? '/chat?nextCursor=' + nextCursor : '/chat';
        return {
          url,
          method: 'GET',
        };
      },
    }),
  }),

  overrideExisting: true,
});

export const {useLazyGetChatsQuery, useGetChatsQuery} = ChatApi;
