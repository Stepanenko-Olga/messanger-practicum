import template from './chatsBlock.hbs';
import Block from '../../../utils/Block';
import { ChatsCard } from './chatsCard';
import { ChatsBlockProps } from './types';
import ChatsController from '../../../controllers/ChatsController';
import { ChatsProfile } from './chatsProfile';
import store from '../../../utils/Store/Store';
import { StoreEvents } from '../../../utils/Store/const';
import { Chat } from '../../../api/ChatsApi/types';


export class ChatsBlock extends Block<ChatsBlockProps> {
  constructor(props: ChatsBlockProps) {
    super('box', props);
    store.on(StoreEvents.Updated, () => {
      const chats = store.getState().chats?.data;
      this.setProps({ chats });
    });
  }

  init() {
    this.element?.classList.add('chats');
    this.children.chatsProfile = new ChatsProfile();
    if (this.props.chats) this.children.chatsCards = this.createChats(this.props.chats);
  }

  protected componentDidUpdate(oldProps: ChatsBlockProps, newProps: ChatsBlockProps): boolean {
    console.log(newProps);
    if (newProps.chats) this.children.chatsCards = this.createChats(newProps.chats);
    return true;
  }


  private createChats(chats: Chat[]) {
    return chats.map(chat => {
      return new ChatsCard({
        img: chat.avatar,
        name: chat.title,
        text: chat.last_message?.content,
        time: chat.last_message?.time?.slice(0, 10),
        count: chat.unread_count,
        id: chat.id,
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

