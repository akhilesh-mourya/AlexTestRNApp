import {Messages} from '../redux/chat/type';

export enum Size {
  Extra_Small = 'esm',
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
  Full = 'fl',
  Fit_To_Width = 'ftw',
  Admin_group = 'adg',
  Flexible = 'flexible',
}

export enum Type {
  Primary = 'primary',
  Secondary = 'secondary',
  Message = 'message',
  Grey = 'grey',
  Error = 'error',
  Link = 'link',
  Info = 'info',
  Text = 'text',
  Placeholder = 'placeholder',
  Black = 'black',
  Amount = 'amount',
  White = 'white',
  Line = 'line',
  Danger = 'danger',
  Warning = 'warning',
  SkyBlue = 'sky_blue',
  Clear = 'clear',
  Disabled = 'disabled',
  Tooltip = 'tooltip',
  GreySecondary = 'greySecondary',
  GreyShade = 'greyShade',
  GreyTextColor = 'greyTextColor',
  PrimeryGradiant = 'primeryGradiant',
  HeadingTextBG = 'headingTextBG',
  RememberMeText = 'rememberMeText',
  BG = 'BG',
  Green = 'green',
  LightGreen = 'lightGreen',
  Purple = 'purple',
  UpdateBgColor = 'updateBgColor',
}

export enum FontFamily {
  Regular = 'Manrope-Regular',
  Bold = 'Manrope-Bold',
  SemiBold = 'Manrope-Semibold',
}

export enum API_METHOD {
  Get = 'GET',
  Post = 'POST',
  Delete = 'DELETE',
  Put = 'PUT',
}

export enum SCREEN_NAME {
  Chat = 'Chat',
}

export interface StructuredProps {
  title: string;
  data: [Messages];
}

export interface MessageSectionItemProps {
  item: Messages;
  index: number;
}