import template from './editRow.hbs';
import Block from '../../utils/Block';
import { EditRowProps } from './types';

export class EditRow extends Block {
  constructor(props: EditRowProps) {
    super('box', props);
  }

  init() {
    this.element?.classList.add('profile__info-row');
  }

  render() {
    return this.compile(template, this.props);
  }
}
