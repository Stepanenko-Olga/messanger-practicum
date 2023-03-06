import template from './chatsBlock.hbs';
import Block from '../../../utils/Block';
import { renderDOM } from '../../../utils/renderDOM';
import { ChatsProfileLink } from './chatsProfileLink';
import { ChatsSearch } from './chatsSearch';
import { ChatsCard } from './chatsCard';
import img from '../../../static/pic/ava.jpeg';

export class ChatsBlock extends Block {
  constructor() {
    super('box');
  }

  init() {
    this.element?.classList.add('chats');
    this.children.chatsProfileLink = new ChatsProfileLink({
      events: {
        click: () => renderDOM('profile'),
      },
    });
    this.children.chatsSearch = new ChatsSearch({
      type: 'text',
      name: 'name',
      placeholder: 'Поиск',
    });
    this.children.chatsCard = new ChatsCard({
      img,
      name: 'Андрей',
      text: 'Привет! Давай знакомиться',
      time: '13:45',
      count: 3,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
