import { Message } from "../../../api/ChatsApi/types";

export interface MessagesBlockProps {
    selectedChat?: number;
    messages: Message[];
    userId: number;
  }
