import Block from "../Block";
import Router from "../Router";


export function withRouter(Component: typeof Block) {
    type Props = any;
    return class WithRouter extends Component {
        constructor(props: Props & PropsWithRouter) {
            super('div', { ...props, router: Router });
        }
    }
}

export interface PropsWithRouter {
    router: typeof Router;
}
