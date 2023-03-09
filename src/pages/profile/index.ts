import Block from '../../utils/Block';
import template from './profile.hbs';
import { renderDOM } from '../../utils/renderDOM';
import { ProfileInfoRow } from './profileInfoRow';
import { ProfileLinkRow } from './profileLinkRow';
import { ProfileExitRow } from './profileExitRow';
import { EditAvatar } from '../../components/editAvatar';

export class Profile extends Block {
  constructor() {
    super('box');
  }



  init() {
    this.element?.classList.add('container');
    this.children.editAvatar = new EditAvatar({});
    this.children.avaOpen = new ProfileLinkRow({
      title: 'Поменять аватар',
      events: {
        click: () => { (this.children.editAvatar as Block).setProps({ display: "block" })},
      },
    }),
    this.children.email = new ProfileInfoRow({ title: 'Почта', value: 'pochta@yandex.ru' });
    this.children.login = new ProfileInfoRow({ title: 'Логин', value: 'ivanivanov' });
    this.children.firstName = new ProfileInfoRow({ title: 'Имя', value: 'Иван' });
    this.children.secondName = new ProfileInfoRow({ title: 'Фамилия', value: 'Иванов' });
    this.children.displayName = new ProfileInfoRow({ title: 'Имя в чате', value: 'Иван' });
    this.children.phone = new ProfileInfoRow({ title: 'Телефон', value: '+7 910 123 45 67' });
    this.children.editInfoLink = new ProfileLinkRow({
      title: 'Изменить данные',
      events: {
        click: () => renderDOM('editInfo'),
      },
    });
    this.children.editPasswordLink = new ProfileLinkRow({
      title: 'Изменить пароль',
      events: {
        click: () => renderDOM('editPassword'),
      },
    });
    this.children.exit = new ProfileExitRow({
      events: {
        click: () => renderDOM('home'),
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
