import template from './profileLinkRow.hbs';
import Block from '../../../utils/Block/Block';
import { ProfileLinkRowProps } from './types';
import Router from '../../../utils/router/Router';

export class ProfileLinkRow extends Block<ProfileLinkRowProps> {
  constructor(props: ProfileLinkRowProps) {
    super('span', {
      ...props,
      events: {
        click: () => this.navigate()
      },
      router: Router
    });
  }

  init() {
    this.element?.classList.add('profile__link-row');
  }

  navigate() {
    this.props.router.go(this.props.to);
  }

  render() {
    return this.compile(template, this.props);
  }
}
