import { Chat, Message } from "../../../api/ChatsApi/types";

export interface MessagesBlockProps {
    selectedChat?: Chat;
    messages: Message[];
    userId: number;
  }
