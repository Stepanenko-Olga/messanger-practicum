import template from './chats.hbs';
import Block from '../../utils/Block';
import { ChatsBlock } from './chatsBlock';
import { MessagesBlock } from './messagesBlock';

export class Chats extends Block {
  constructor() {
    super('box');
  }

  init() {
    this.element?.classList.add('container');
    this.children.chatsBlock = new ChatsBlock();
    this.children.messagesBlock = new MessagesBlock();
  }

  render() {
    return this.compile(template, this.props);
  }
}
