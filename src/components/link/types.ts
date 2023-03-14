import { PropsWithRouter } from "../../utils/hocs/withRouter";
import Router from "../../utils/router/Router";

export interface LinkProps extends PropsWithRouter {
  title: string;
  to: string;
  router: typeof Router;
  events?: {
    click: () => void;
  }
}
