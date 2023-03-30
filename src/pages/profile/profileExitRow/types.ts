export interface ProfileExitRowProps {
  title: string;
  events?: {
    click: (event: Event) => void;
  };
}
