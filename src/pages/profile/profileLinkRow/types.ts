import Router from "../../../utils/router/Router";

export interface ProfileLinkRowProps {
  title: string;
  to: string;
  router: typeof Router;
  events?: {
    click: () => void;
  };
}
