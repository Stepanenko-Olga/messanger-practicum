import template from './link.hbs';
import Block from '../../utils/Block';
import { LinkProps } from './types';
import { withRouter } from '../../utils/hocs/withRouter';
import styles from './link.pcss';

class BaseLink extends Block<LinkProps> {
  constructor(props: LinkProps) {
    super({
      ...props,
      events: {
        click: () => this.navigate()
      },
    });
  }

  navigate() {
    this.props.router.go(this.props.to);
  }

  render() {
    console.log(...this.props.to);
    return this.compile(template, { ...this.props, styles });
  }
}

export const Link = withRouter(BaseLink);
