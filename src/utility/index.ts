import {chain} from 'lodash';
import {Messages} from '../redux/chat/type';
import moment from 'moment';
import {StructuredProps} from '../enums';

export const getSectionMessages = (messages: Messages[]) => {
  const result = chain(messages)
    .groupBy((item: Messages) =>
      moment(item?.createdAt, 'YYYY-MM-DDThh:mm:ss.000Z')
        .minutes(
          Math.floor(
            moment(item?.createdAt, 'YYYY-MM-DDThh:mm:ss.000Z').minutes() / 60,
          ) * 60,
        )
        .format('MMM DD, hh:mm A'),
    )
    .map((_data: [Messages], _title: string) => ({
      title: _title,
      data: _data,
    }))
    .value();

  const _result: StructuredProps[] = [];
  result.map((_item: StructuredProps, _index: number) => {
    const _data: Messages[] = [];
    _item.data.map((chatItem: Messages) => {
      _data.push({...chatItem, sectionIndex: _index});
    });
    _result.push({..._item, data: _data});
  });
  return _result || [];
};
