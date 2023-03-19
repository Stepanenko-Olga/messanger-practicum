import { User } from "../AuthApi/types";

export interface Message {
    user?: User;
    time?: string;
    content?: string;
}

export interface Chat {
    id: number,
    title: string,
    avatar: string,
    unread_count: number,
    last_message: Message;
}

export interface CreateChatData {
    title: string;
  }

export interface DeleteChatData {
    chatId: number;
  }
