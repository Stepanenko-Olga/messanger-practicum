import template from './link.hbs';
import Block from '../../utils/Block';
import { LinkProps } from './types';
import { withRouter } from '../../utils/hocs/withRouter';

class BaseLink extends Block<LinkProps> {
  constructor(props: LinkProps) {
    super('span',
      {
        ...props,
        events: {
          click: () => this.navigate()
        },
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

export const Link = withRouter(BaseLink);
