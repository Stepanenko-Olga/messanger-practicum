import template from './messagesHeader.hbs';
import Block from '../../../../utils/Block/Block';
import { MessagesHeaderProps } from './types';


export class MessagesHeader extends Block {
  constructor(props: MessagesHeaderProps) {
    super('div', props);
  }

  init() {
    this.element?.classList.add('messages__header');
  }

  render() {
    return this.compile(template, this.props);
  }
}
