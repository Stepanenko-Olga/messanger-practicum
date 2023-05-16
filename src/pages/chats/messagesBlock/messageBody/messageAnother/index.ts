import template from './messageAnother.hbs';
import Block from '../../../../../utils/Block/Block';

export class MessageAnother extends Block {
  constructor(props: unknown) {
    super('box', props);
  }


  init() {
    this.element?.classList.add('messages__body-another');
  }

  render() {
    return this.compile(template, this.props);
  }
}
