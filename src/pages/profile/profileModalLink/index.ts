import template from './profileModalLink.hbs';
import Block from '../../../utils/Block';
import { ProfileModalLinkProps } from './types';

export class ProfileModalLink extends Block<ProfileModalLinkProps> {
  constructor(props: ProfileModalLinkProps) {
    super('span', props );
  }

  init() {
   
  }

  render() {
    return this.compile(template, this.props);
  }
}
