import template from './header.hbs';
import Block from '../../utils/Block/Block';
import { HeaderProps } from './types';

export class Header extends Block<HeaderProps> {
  constructor(props: HeaderProps) {
    super('span', props);
  }

  init() {
    this.element?.classList.add('header');
  }

  render() {
    return this.compile(template, this.props);
  }
}
