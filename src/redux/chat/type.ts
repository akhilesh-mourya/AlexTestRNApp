export interface ChatProps {
  data: [Messages] | [];
  nextCursor: number | null;
  success: boolean;
  loggedInUserId: number;
}

export interface User {
  _id: any;
  name?: string;
  avatar?: string;
}

export interface Messages {
  _id: string;
  text: string;
  createdAt: Date | number;
  user: User;
  sectionIndex?: number;
}
