import template from './profileLinkRow.hbs';
import Block from '../../../utils/Block';
import { ProfileLinkRowProps } from './types';

export class ProfileLinkRow extends Block {
  constructor(props: ProfileLinkRowProps) {
    super('span', props);
  }

  init() {
    this.element?.classList.add('profile__link-row');
  }

  render() {
    return this.compile(template, this.props);
  }
}
