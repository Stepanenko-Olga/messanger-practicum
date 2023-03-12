import template from './home.hbs';
import Block from '../../utils/Block';
import { Link } from '../../components/link';

export class Home extends Block {
  constructor() {
    super('box');
  }

  init() {
    this.element?.classList.add('container');
    this.children.authorizationLink = new Link({
      title: 'Авторизация',
      to: '/authorization'
    });
    this.children.registrationLink = new Link({
      title: 'Регистрация',
      to: '/registration'
    });
    this.children.profileLink = new Link({
      title: 'Профиль пользователя',
      to: '/profile'
    });
    this.children.chatsLink = new Link({
      title: 'Чат',
      to: '/chats'
    });
    this.children.page404Link = new Link({
      title: 'Page404',
      to: '/page404'
    });
    this.children.page500Link = new Link({
      title: 'Page500',
      to: '/page500'
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
