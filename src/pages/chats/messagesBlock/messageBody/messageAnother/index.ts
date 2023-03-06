import template from './messageAnother.hbs';
import Block from '../../../../../utils/Block';
import { MessageProps } from '../types';


export class MessageAnother extends Block {
  constructor(props: MessageProps) {
    super('box', props);
  }
   

  init() {
    this.element?.classList.add('messages__body-another'); 
  }

  render() {
    console.log(this.props);
    return this.compile(template, this.props);
  }
}
