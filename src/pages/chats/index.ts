import template from './chats.hbs';
import Block from '../../utils/Block/Block';
import { ChatsBlock } from './chatsBlock';
import { MessagesBlock } from './messagesBlock';
import ChatsController from '../../controllers/ChatsController';
import store, { withStore } from '../../utils/Store/Store';


export class ChatsPage extends Block {
  constructor() {
    super('box');
  }


  init() {
    this.element?.classList.add('container');
    this.children.chatsBlock = new ChatsBlock({ chats: [] });
    this.children.messagesBlock = new MessagesBlock({});
    ChatsController.fetchChats().finally(() => {
      const chats = store.getState().chats?.data;
      (this.children.chatsBlock as Block).setProps({ chats });
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

const withChats = withStore((state) => ({ ...state.chats }))
export const Chats = withChats(ChatsPage);
