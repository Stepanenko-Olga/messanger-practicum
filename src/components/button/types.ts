export interface ButtonProps {
    title: string;  
    events?: {
        click: (event: Event) => void;
    }
  }
