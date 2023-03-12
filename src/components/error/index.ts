import template from './error.hbs';
import Block from '../../utils/Block';
import { ErrorProps } from './types';

export class ErrorPage extends Block {
  constructor(props: ErrorProps) {
    super({ props });
  }

  init() {
  }

  render() {
    console.log(this.props)
    return this.compile(template, this.props);
  }
}
