import Block from '../../utils/Block';
import template from './profile.hbs';
import { ProfileInfoRow } from './profileInfoRow';
import { ProfileLinkRow } from './profileLinkRow';
import { EditAvatar } from '../../components/editAvatar';
import Router from '../../utils/router/Router';
import AuthController from '../../controllers/AuthController';
import store, { withStore } from '../../utils/Store';
import { ProfileExitRow } from './profileExitRow';

export class ProfilePage extends Block {
  constructor() {
    super('box');
  }



  init() {
    AuthController.fetchUser();   
    const user = store.getState().user?.data;
    this.element?.classList.add('container');
    this.children.editAvatar = new EditAvatar({});
    /* this.children.avaOpen = new ProfileLinkRow({
      title: 'Поменять аватар',
      events: {
        click: () => { (this.children.editAvatar as Block).setProps({ display: "block" }) },
      },
    }), */
    this.children.email = new ProfileInfoRow({ title: 'Почта', value: user?.email });
    this.children.login = new ProfileInfoRow({ title: 'Логин', value: user?.login });
    this.children.firstName = new ProfileInfoRow({ title: 'Имя', value: user?.first_name });
    this.children.secondName = new ProfileInfoRow({ title: 'Фамилия', value: user?.second_name });
    this.children.displayName = new ProfileInfoRow({ title: 'Имя в чате', value: user?.login });
    this.children.phone = new ProfileInfoRow({ title: 'Телефон', value: user?.phone });
    this.children.editInfoLink = new ProfileLinkRow({
      title: 'Изменить данные',
      to: '/editInfo',
      router: Router,
    });
    this.children.editPasswordLink = new ProfileLinkRow({
      title: 'Изменить пароль',
      to: '/editPassword',
      router: Router,
    });
    this.children.exit = new ProfileExitRow({
      title: 'Выйти',
      events: {
        click: () => {
          AuthController.logout();
        }
      }
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
const withUser = withStore((state) => ({ ...state.user }))

export const Profile = withUser(ProfilePage);
