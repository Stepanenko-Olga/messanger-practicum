import template from './messageMy.hbs';
import Block from '../../../../../utils/Block/Block';
import { MessageProps } from '../types';


export class MessageMy extends Block {
  constructor(props: MessageProps) {
    super('box', props);
  }


  init() {
    this.element?.classList.add('messages__body-my');
  }

  render() {
    return this.compile(template, this.props);
  }
}

