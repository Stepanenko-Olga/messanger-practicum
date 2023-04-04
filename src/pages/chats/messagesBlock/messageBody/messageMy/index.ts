import template from './messageMy.hbs';
import Block from '../../../../../utils/Block/Block';


export class MessageMy extends Block {
  constructor(props: any ) {
    super('box', props);
  }


  init() {
    this.element?.classList.add('messages__body-my');
  }

  render() {
    return this.compile(template, this.props);
  }
}

