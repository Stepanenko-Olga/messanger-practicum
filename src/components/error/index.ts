import template from './error.hbs';
import Block from '../../utils/Block';
import { ErrorProps } from './types';

export class ErrorPage extends Block {
  constructor(props: ErrorProps) {
    super('div', props);
  }

  init() {
    this.element?.classList.add('err');
  }

  render() {
    return this.compile(template, this.props);
  }
}
