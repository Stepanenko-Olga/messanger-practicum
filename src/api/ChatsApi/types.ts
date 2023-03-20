import { User } from "../AuthApi/types";

export interface LastMessage {
    user?: User;
    time?: string;
    content?: string;
}

export interface Message {
  chat_id: number;
  time: string;
  type: string;
  user_id: number;
  content: string;
  file?: {
    id: number;
    user_id: number;
    path: string;
    filename: string;
    content_type: string;
    content_size: number;
    upload_date: string;
  }
}

export interface Chat {
    id: number,
    title: string,
    avatar: string,
    unread_count: number,
    last_message: LastMessage;
}

export interface CreateChatData {
    title: string;
  }

export interface DeleteChatData {
    chatId: number;
  }
