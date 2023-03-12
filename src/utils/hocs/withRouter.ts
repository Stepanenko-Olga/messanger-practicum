import Block from "../Block";
import Router from "../Router";


export function withRouter(Component: typeof Block<any>) {
    type Props = any;
    console.log(Component);
    return class WithRouter extends Component {
        constructor(props: Props & PropsWithRouter) {
            super({ ...props, router: Router });
        }
    }
}

export interface PropsWithRouter {
    router: typeof Router;
}
