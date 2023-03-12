import template from './errorMessage.hbs';
import Block from '../../utils/Block';
import { ErrorMessageProps } from './types';

export class ErrorMessage extends Block {
  constructor(props: ErrorMessageProps) {
    super({type:'span', ...props});
  }

  get title() {
    return (this.props.title);
  }

  init() {
    this.element?.classList.add('errorMessage');
  }

  render() {
    return this.compile(template, this.props);
  }
}
