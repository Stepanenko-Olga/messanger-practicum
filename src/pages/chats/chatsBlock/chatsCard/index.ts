import template from './chatsCard.hbs';
import Block from '../../../../utils/Block';
import { ChatsCardProps } from './types';

export class ChatsCard extends Block {
  constructor(props: ChatsCardProps) {
    super('box', props);
  }

  init() {
    this.element?.classList.add('chats__list-card');
  }

  render() {
    return this.compile(template, this.props);
  }
}
