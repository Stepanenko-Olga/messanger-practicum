import template from './chatsBlock.hbs';
import Block from '../../../utils/Block';
import { ChatsSearch } from './chatsSearch';
import { ChatsCard } from './chatsCard';
import { Link } from '../../../components/link';
import Router from '../../../utils/router/Router';
import { ChatsBlockProps } from './types';
import ChatsController from '../../../controllers/ChatsController';


export class ChatsBlock extends Block<ChatsBlockProps> {
  constructor(props: ChatsBlockProps) {
    super('box', props);
  }

  init() {
    this.element?.classList.add('chats');
    this.children.chatsProfileLink = new Link({
      title: 'Профиль >',
      to: '/settings',
      router: Router,
    });
    this.children.chatsSearch = new ChatsSearch({
      type: 'text',
      name: 'name',
      placeholder: 'Поиск',
    });
    this.children.chatsCards = this.createChats(this.props);    
  }

  protected componentDidUpdate(oldProps: ChatsBlockProps, newProps: ChatsBlockProps): boolean {
    this.children.chatsCards = this.createChats(newProps);
    return true;
  }


  private createChats(props: ChatsBlockProps) {
    return props.chats.map(chat => {
      return new ChatsCard({
        img: chat.avatar,
        name: chat.title,
        text: chat.last_message?.content,
        time: chat.last_message?.time,
        count: chat.unread_count,
        events: {
          click: () => {
            ChatsController.selectChat(chat.id);
          }
        }
      });
    })
  }


  render() {
    return this.compile(template, this.props);
  }
}

