import template from './messagesBody.hbs';
import Block from '../../../../utils/Block';
import { MessagesBodyProps } from './types';
import { MessageMy } from './messageMy';
import { MessageAnother } from './messageAnother';
import { messages } from './consts';

export class MessagesBody extends Block {
  constructor(props: MessagesBodyProps) {
    super('div', props);
  }



  init() {
    this.element?.classList.add('messages__body');
    this.children.messages = [];
    messages.map((message) => {
      if (message.type === "my") (this.children.messages as Block[]).push(new MessageMy({ text: message.text, type: message.type }));
      if (message.type === "another") (this.children.messages as Block[]).push(new MessageAnother({ text: message.text, type: message.type }));
    })
  }

  render() {
    return this.compile(template, this.props);
  }
}
