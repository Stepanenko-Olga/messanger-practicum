import Router from "../../utils/router/Router";

export interface LinkProps {
  title: string;
  to: string;
  router: typeof Router;
  events?: {
    click: () => void;
  }
}
