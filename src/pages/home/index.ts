import template from './home.hbs';
import Block from '../../utils/Block';
import { Link } from '../../components/link';
import { renderDOM } from '../../utils/renderDOM';

export class Home extends Block {
  constructor() {
    super('box');
  }

  init() {
    this.element?.classList.add('container');
    this.children.authorizationLink = new Link({
      title: 'Авторизация',
      events: {
        click: () => renderDOM('authorization'),
      },
    });
    this.children.registrationLink = new Link({
      title: 'Регистрация',
      events: {
        click: () => renderDOM('registration'),
      },
    });
    this.children.profileLink = new Link({
      title: 'Профиль пользователя',
      events: {
        click: () => renderDOM('profile'),
      },
    });
    this.children.chatsLink = new Link({
      title: 'Чат',
      events: {
        click: () => renderDOM('chats'),
      },
    });
    this.children.page404Link = new Link({
      title: 'Page404',
      events: {
        click: () => renderDOM('page404'),
      },
    });

    this.children.page500Link = new Link({
      title: 'Page500',
      events: {
        click: () => renderDOM('page500'),
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
