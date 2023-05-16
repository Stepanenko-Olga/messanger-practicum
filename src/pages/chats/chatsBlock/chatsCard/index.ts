import template from './chatsCard.hbs';
import Block from '../../../../utils/Block/Block';
import { ChatsCardProps } from './types';
import { ChatAva } from './chatAva';

export class ChatsCard extends Block {
  constructor(props: ChatsCardProps) {
    super('box', props);
  }

  init() {
    this.element?.classList.add('chats__list-card');
    this.children.chatAva = new ChatAva({ img: this.props.img })
  }

  render() {
    return this.compile(template, this.props);
  }
}
