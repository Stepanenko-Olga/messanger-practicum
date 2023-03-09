export interface MessagesBodyProps {
  date: string;
  messages: MessageProps[];
}


export interface MessageProps {
  date?: string;
  time?: string;
  text: string;
  img?: string;
  type: string;
}
