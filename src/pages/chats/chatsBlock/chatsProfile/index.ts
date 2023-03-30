import template from './chatsProfile.hbs';
import Block from '../../../../utils/Block';
import { Button } from '../../../../components/button';
import { CreateChatModal } from './createChatModal';
import { Link } from '../../../../components/link';
import Router from '../../../../utils/router/Router';

export class ChatsProfile extends Block {
  constructor() {
    super('div');
  }

  init() {
    this.children.chatsProfileLink = new Link({
      title: 'Профиль >',
      to: '/settings',
      router: Router,
    });
    this.children.createChatButton = new Button({
      title: 'Добавить чат',
      events: {
        click: () => {
          (this.children.createChat as Block).setProps({ display: "modal-show" })
        },
      },
    });
    this.children.createChat = new CreateChatModal({ display: "modal-hide" });
  }

  render() {
    return this.compile(template, this.props);
  }
}
