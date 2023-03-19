import template from './chats.hbs';
import Block from '../../utils/Block';
import { ChatsBlock } from './chatsBlock';
import { MessagesBlock } from './messagesBlock';
import ChatsController from '../../controllers/ChatsController';
import store, { withStore } from '../../utils/Store';

export class ChatsPage extends Block {
  constructor() {
    super('box');
  }

  init() {
    ChatsController.create({ title: "oltest" });
    ChatsController.fetchChats();
    console.log(store.getState());
    this.element?.classList.add('container');
    this.children.chatsBlock = new ChatsBlock();
    this.children.messagesBlock = new MessagesBlock();
  }

  render() {
    return this.compile(template, this.props);
  }
}

const withChats = withStore((state) => ({ ...state.chats }))

export const Chats = withChats(ChatsPage);
