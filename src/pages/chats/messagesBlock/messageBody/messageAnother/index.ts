import template from './messageAnother.hbs';
import Block from '../../../../../utils/Block';

export class MessageAnother extends Block {
  constructor(props: any) {
    super('box', props);
  }


  init() {
    this.element?.classList.add('messages__body-another');
  }

  render() {
    return this.compile(template, this.props);
  }
}
