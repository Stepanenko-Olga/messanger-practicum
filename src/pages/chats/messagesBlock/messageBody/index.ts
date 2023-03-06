import template from './messagesBody.hbs';
import Block from '../../../../utils/Block';
import { MessagesBodyProps } from './types';
import { MessageMy } from './messageMy';
import { MessageAnother } from './messageAnother';

export class MessagesBody extends Block {
  constructor(props: MessagesBodyProps) {
    super('div', props);
  }
   


  init() {
    this.element?.classList.add('messages__body');
    this.children.messageAnother = new MessageMy({text: this.props.messagesMyText})            
    this.children.messageMy = new MessageAnother({text: this.props.messagesAnotherText})
  }

  render() {
      return this.compile(template, this.props);
  }
}
