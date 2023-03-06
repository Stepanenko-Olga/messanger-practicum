import { ErrorPage } from '../../components/error';
import { Link } from '../../components/link';
import Block from '../../utils/Block';
import { renderDOM } from '../../utils/renderDOM';
import template from './page500.hbs';

export class Page500 extends Block {
  constructor() {
    super('box');
  }

  init() {
    this.element?.classList.add('container');
    this.children.error = new ErrorPage({ errorCode: '500', errorMessage: 'мы уже фиксим' });
    this.children.returnLink = new Link({
      title: 'Назад к чатам',
      events: {
        click: () => renderDOM('chats'),
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
