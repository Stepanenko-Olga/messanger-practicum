import template from './chatsProfileLink.hbs';
import Block from '../../../../utils/Block';
import { ChatsProfileLinkProps } from './types';

export class ChatsProfileLink extends Block {
  constructor(props: ChatsProfileLinkProps) {
    super('span', props);
  }

  init() {
    this.element?.classList.add('chats__profile-link');
  }

  render() {
    return this.compile(template, this.props);
  }
}
