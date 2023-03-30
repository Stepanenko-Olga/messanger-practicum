import { User } from "../../api/AuthApi/types";
import { Chat, Message } from "../../api/ChatsApi/types";
import Block from "../Block";

export interface State {
    user?: {
      data: User;
      error: string;
      isLoading: boolean;
      selectedUser?: User;
    },
    chats?: {
      data: Chat[];
      selectedChat?: Chat;
      error: string;
      isLoading: boolean;
    }
    messages?: {
      data: Record<number, Message[]>;
      error: string;
      isLoading: boolean;
    }
  }
  
  export interface BlockConstructable<P extends Record<string, any> = any> {
    new(props: P): Block<P>;
  }
