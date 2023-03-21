import template from './profileModalLink.hbs';
import Block from '../../../utils/Block';
import { ProfileModalLinkProps } from './types';

export class ProfileModalLink extends Block<ProfileModalLinkProps> {
  constructor(props: ProfileModalLinkProps) {
    super('div', props );
  }

  init() {
    this.element?.classList.add("profile__ava");
  }

  render() {
    return this.compile(template, this.props);
  }
}
