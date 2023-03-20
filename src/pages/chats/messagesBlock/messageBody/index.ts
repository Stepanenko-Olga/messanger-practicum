import template from './messagesBody.hbs';
import Block from '../../../../utils/Block';
import { MessagesBodyProps } from './types';
import { MessageMy } from './messageMy';
import { MessageAnother } from './messageAnother';;
import store from '../../../../utils/Store';
import { Message } from "../../../../api/ChatsApi/types";

export class MessagesBody extends Block<MessagesBodyProps> {
  constructor(props: MessagesBodyProps) {
    super('div', props);
  }



  init() {    
    this.element?.classList.add('messages__body');
    this.children.messages = [];
    this.props.messages.map((message: Message) => {
      if (message.user_id === store.getState().user?.data.id) {
        (this.children.messages as Block[]).push(new MessageMy({ text: message.content, type: "my" }));
      } else {
        (this.children.messages as Block[]).push(new MessageAnother({ text: message.content, type: "another" }));
      }

    })
  }

  render() {
    return this.compile(template, this.props);
  }
}
