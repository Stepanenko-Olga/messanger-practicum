import template from './messagesBody.hbs';
import Block from '../../../../utils/Block/Block';
import { MessagesBodyProps } from './types';
import { MessageMy } from './messageMy';
import { MessageAnother } from './messageAnother';;
import store from '../../../../utils/Store/Store';
import { Message } from "../../../../api/ChatsApi/types";
import { Button } from '../../../../components/button';
import { AddChatModal } from '../addChatModal';
import { RemoveFromChatModal } from '../removeFromChatModal';
import ChatsController from '../../../../controllers/ChatsController';

export class MessagesBody extends Block<MessagesBodyProps> {
  constructor(props: MessagesBodyProps) {
    super('div', props);
  }

  init() {
    this.element?.classList.add('messages__body');
    if (this.props.selectedChat) {
      this.children.addChatButton = new Button({
        title: 'Добавить пользователя',
        events: {
          click: () => {
            (this.children.addChat as Block).setProps({ display: "modal-show" })
          },
        },
      });
      this.children.removeFromChatButton = new Button({
        title: 'Удалить пользователя',
        events: {
          click: () => {
            (this.children.removeFromChat as Block).setProps({ display: "modal-show" })
          },
        },
      });
      this.children.deleteChatButton = new Button({
        title: 'Удалить чат',
        events: {
          click: () => {
            const chatId = store.getState().chats?.selectedChat?.id;
            if (chatId) ChatsController.deleteChat({ chatId });
          },
        },
      });
    }
    this.children.messages = [];
    this.props.messages.map((message: Message) => {
      if (message.user_id === store.getState().user?.data.id) {
        (this.children.messages as Block[]).push(new MessageMy({ text: message.content, type: "my" }));
      } else {
        (this.children.messages as Block[]).push(new MessageAnother({ text: message.content, type: "another" }));
      }

    })
    this.children.addChat = new AddChatModal({ display: "modal-hide" });
    this.children.removeFromChat = new RemoveFromChatModal({ display: "modal-hide" });
  }

  render() {
    return this.compile(template, this.props);
  }
}
