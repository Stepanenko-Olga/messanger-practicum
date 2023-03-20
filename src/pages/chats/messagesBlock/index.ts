import Block from '../../../utils/Block';
import { MessagesBody } from './messageBody';
import { messages } from './messageBody/consts';
import template from './messagesBlock.hbs';


import { MessagesFooter } from './messagesFooter';
import { MessagesHeader } from './messagesHeader';
import { MessagesBlockProps } from './types';



export class MessagesBlockWithProps extends Block<MessagesBlockProps> {
  constructor(props: MessagesBlockProps) {
    super('box', props);
  }

  init() {
    this.element?.classList.add('messages');
    this.children.messagesHeader = new MessagesHeader({
      name: 'Вадим',
      avatar: 'ava',
    });
    this.children.messagesBody = new MessagesBody({     
      messages: [...messages]
    });
    this.children.messagesFooter = new MessagesFooter({});
  }




  render() {
    return this.compile(template, this.props);
  }
}
