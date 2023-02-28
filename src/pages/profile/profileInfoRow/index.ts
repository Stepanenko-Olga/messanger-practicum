import template from './profileInfoRow.hbs';
import Block from '../../../utils/Block';
import { ProfileInfoRowProps } from './types';

export class ProfileInfoRow extends Block {
  constructor(props: ProfileInfoRowProps) {
    super('span', props);
  }

  init() {
    this.element?.classList.add('profile__infoBlock_row');
  }

  render() {
    return this.compile(template, this.props);
  }
}
