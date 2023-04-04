import template from './link.hbs';
import Block from '../../utils/Block/Block';
import { LinkProps } from './types';
import Router from '../../utils/router/Router';


export class Link extends Block<LinkProps> {
  constructor(props: LinkProps) {
    super('span',
      {
        ...props,
        events: {
          click: () => this.navigate()
        },
        router: Router
      }
    );
  }

  init() {
    this.element?.classList.add('link');
  }

  navigate() {
    this.props.router.go(this.props.to);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}


