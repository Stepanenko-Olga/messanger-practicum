import template from './link.hbs';
import Block from '../../utils/Block';
import { LinkProps } from './types';

export class Link extends Block {
  constructor(props: LinkProps) {
    super('span', props);
  }

  init() {
    this.element?.classList.add('link');
  }

  render() {
    return this.compile(template, this.props);
  }
}
