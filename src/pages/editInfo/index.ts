import { UpdateData } from '../../api/UserApi/types';
import { Button } from '../../components/button';
import { FormField } from '../../components/formField';
import UserController from '../../controllers/UserController';
import Block from '../../utils/Block';
import { printValues } from '../../utils/printFormData';
import store from '../../utils/Store';
import { submitValidation } from '../../utils/validation';
import template from './editInfo.hbs';

export class EditInfo extends Block {
  constructor() {
    super('form');
    this.setProps({
      events: {
        submit: (event: Event) => {
          event.preventDefault();
          this.onSubmit();
        }
      },
    })
  }

  init() {
    const user = store.getState().user?.data;
    this.element?.classList.add('container');
    this.children.editRowEmail = new FormField({
      label: 'Почта',
      value: user?.email,
      type: 'text',
      name: 'email',
      validationType: "email"
    });
    this.children.editRowLogin = new FormField({
      label: 'Логин',
      value: user?.login,
      type: 'text',
      name: 'login',
      validationType: "login"
    });
    this.children.editRowFirstName = new FormField({
      label: 'Имя',
      value: user?.first_name,
      type: 'text',
      name: 'first_name',
      validationType: "name"
    });
    this.children.editRowSecondName = new FormField({
      label: 'Фамилия',
      value: user?.second_name,
      type: 'text',
      name: 'second_name',
      validationType: "name"
    });
    this.children.editRowDisplayName = new FormField({
      label: 'Имя в чате',
      value: user?.login,
      type: 'text',
      name: 'display_name',
      validationType: "name"
    });
    this.children.editRowPhone = new FormField({
      label: 'Телефон',
      value: user?.phone,
      type: 'text',
      name: 'phone',
      validationType: "phone"
    });
    this.children.submitButton = new Button({
      title: 'Сохранить',
      type: "submit",
    });
  }

  onSubmit() {
    submitValidation(this.children);
    const values = printValues(this.children);
    const data = Object.fromEntries(values);
    UserController.editUser(data as UpdateData);
  }

  render() {
    return this.compile(template, this.props);
  }
}
