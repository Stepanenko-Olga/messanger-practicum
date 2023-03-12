import { PropsWithRouter } from "../../utils/hocs/withRouter";

export interface LinkProps extends PropsWithRouter {
  title: string;
  to: string;
  events: {
    click: () => void;
  }
}
