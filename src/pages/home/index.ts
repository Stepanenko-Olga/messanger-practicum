import template from './home.hbs';
import Block from '../../utils/Block';
import { Link } from '../../components/link';
import Router from '../../utils/router/Router';

export class Home extends Block {
  constructor() {
    super('box');
  }

  init() {
    this.element?.classList.add('container');
    this.children.authorizationLink = new Link({
      title: 'Авторизация',
      to: '/authorization',
      router: Router,
    });
    this.children.registrationLink = new Link({
      title: 'Регистрация',
      to: '/registration',
      router: Router,
    });
    this.children.profileLink = new Link({
      title: 'Профиль пользователя',
      to: '/profile',
      router: Router,
    });
    this.children.chatsLink = new Link({
      title: 'Чат',
      to: '/chats',
      router: Router,
    });
    this.children.page404Link = new Link({
      title: 'Page404',
      to: '/page404',
      router: Router,
    });
    this.children.page500Link = new Link({
      title: 'Page500',
      to: '/page500',
      router: Router,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
