import Block from '../../../utils/Block';
import { MessagesBody } from './messageBody';
import { messages } from './messageBody/consts';
import template from './messagesBlock.hbs';


import { MessagesFooter } from './messagesFooter';
import { MessagesHeader } from './messagesHeader';



export class MessagesBlock extends Block {
  constructor() {
    super('box');
  }



  init() {
    this.element?.classList.add('messages');
    this.children.messagesHeader = new MessagesHeader({
      name: 'Вадим',
      avatar: 'ava',
    });
    this.children.messagesBody = new MessagesBody({
      date: '01 марта',
      messages: [...messages]
    });
    this.children.messagesFooter = new MessagesFooter({});
  }




  render() {
    return this.compile(template, this.props);
  }
}
