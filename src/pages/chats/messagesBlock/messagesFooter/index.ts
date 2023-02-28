import template from './messagesFooter.hbs';
import Block from '../../../../utils/Block';
import { MessagesFooterProps } from './types';

export class MessagesFooter extends Block {
  constructor(props: MessagesFooterProps) {
    super('div', props);
  }

  init() {
    this.element?.classList.add('messages__footer');   
  }

  render() {
    return this.compile(template, this.props);
  }
}
