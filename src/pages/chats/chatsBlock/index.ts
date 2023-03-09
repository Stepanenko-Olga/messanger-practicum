import template from './chatsBlock.hbs';
import Block from '../../../utils/Block';
import { renderDOM } from '../../../utils/renderDOM';
import { ChatsProfileLink } from './chatsProfileLink';
import { ChatsSearch } from './chatsSearch';
import { ChatsCard } from './chatsCard';
import { chartsCards } from './consts';


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
    this.children.chatsCards = [];
    chartsCards.map((card) => {
      (this.children.chatsCards as Block[]).push(new ChatsCard({
        img: card.img,
        name: card.name,
        text: card.text,
        time: card.time,
        count: card.count,
      }))
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
