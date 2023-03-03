export interface MessagesBodyProps {
  date: string;
  messagesMyText?: string | string[];
  messagesAnotherText?: string | string[];
}


export interface MessageProps {
  date?: string;
  time?: string;
  text: string;
  img?: string;
  type?: string;
}
