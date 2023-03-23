import template from './chatsSearch.hbs';
import Block from '../../../../utils/Block';
import { ChatsSearchProps } from './types';

export class ChatsSearch extends Block {
  constructor(props: ChatsSearchProps) {
    super('span', props);
  }

  init() {
    this.element?.classList.add('chats__search');
  }

  render() {
    return this.compile(template, this.props);
  }
}
