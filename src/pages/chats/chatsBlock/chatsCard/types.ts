export interface ChatsCardProps {
  img?: unknown;
  name: string;
  text?: string;
  time?: string;
  count: number;
  id: number;
  events: {
    click: () => void;
  }
}
