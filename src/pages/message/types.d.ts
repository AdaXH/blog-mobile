interface Repeat extends Message {
  info: string;
  toRepeatUser: User;
  toRepeat: string;
}

/**
 * 留言条模型
 */
export interface Message extends User {
  _id: string;
  date: string;
  content: string;
  repeat: Repeat[];
}

export interface MessageResponse {
  data: Message[];
  totalCount: number;
}
