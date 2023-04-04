import template from './button.hbs';
import Block from '../../utils/Block/Block';
import { ButtonProps } from './types';

export class Button extends Block {
  constructor(props: ButtonProps) {
    super('button', props);
  }

  init() {
    this.element?.classList.add('button');
  }

  render() {
    return this.compile(template, this.props);
  }
}
