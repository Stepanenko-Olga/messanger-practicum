import { Chat, Message } from "../../../../api/ChatsApi/types";

export interface MessagesBodyProps {
  messages: Message[];
  selectedChat?: Chat;
}
