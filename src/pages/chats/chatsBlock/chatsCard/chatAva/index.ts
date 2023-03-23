import Block from '../../../../../utils/Block';
import template from './chatAva.hbs';

import { ChatAvaProps } from './types';

export class ChatAva extends Block {
  constructor(props: ChatAvaProps) {
    super('div', props);
  }

  init() {
    this.element?.classList.add('chats__ava');
  }

  render() {
    return this.compile(template, this.props);
  }
}
