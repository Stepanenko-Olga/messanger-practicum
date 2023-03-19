import template from './profileExitRow.hbs';
import Block from '../../../utils/Block';
import { ProfileExitRowProps } from './types';

export class ProfileExitRow extends Block<ProfileExitRowProps> {
  constructor(props: ProfileExitRowProps) {
    super('span', {
      ...props
    });
  }

  init() {
    this.element?.classList.add('profile__exit');
  }



  render() {
    return this.compile(template, this.props);
  }
}
