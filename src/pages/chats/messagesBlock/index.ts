import Block from '../../../utils/Block';
import template from './messagesBlock.hbs';
import { messageAnother, messageMy } from './consts';

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
    this.children.messagesFooter = new MessagesFooter({});
  }




  render() {
    return this.compile(template, this.props);
  }
}
