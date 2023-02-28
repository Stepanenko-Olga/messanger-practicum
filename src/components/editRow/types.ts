export interface EditRowProps {
    label: string;
    name: string;
    type: string;
    placeholder?: string;
    events?: {
      blur: () => void;
  }
  }
