export interface ButtonProps {
    title: string;
    type?: string;
    events?: {
        click: (event: Event) => void;
    }
}

