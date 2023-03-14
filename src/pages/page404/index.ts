import { ErrorPage } from '../../components/error';
import { Link } from '../../components/link';
import Block from '../../utils/Block';
import Router from '../../utils/Router';
import template from './page404.hbs';

export class Page404 extends Block {
  constructor() {
    super('box');
  }

  init() {
    this.element?.classList.add('container');
    this.children.error = new ErrorPage({ errorCode: '404', errorMessage: 'Не туда попали' });
    this.children.returnLink = new Link({
      title: 'Назад к чатам',
      to: '/chats',
      router: Router,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
