import { UpdatePassword } from '../../api/UserApi/types';
import { Button } from '../../components/button';
import { FormField } from '../../components/formField';
import UserController from '../../controllers/UserController';
import Block from '../../utils/Block';
import { printValues } from '../../utils/printFormData';
import store from '../../utils/Store';
import { submitValidation } from '../../utils/validation';
import template from './editPassword.hbs';

export class EditPassword extends Block {
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
    this.children.editRowOldPassword = new FormField({
      label: 'Старый пароль',     
      type: 'password',
      name: 'oldPassword',
      validationType: "password",
    });
    this.children.editRowNewPassword = new FormField({
      label: 'Новй пароль',     
      type: 'password',
      name: 'newPassword',
      validationType: "password"
    });
    this.children.editRowPasswordCheck = new FormField({
      label: 'Повторите новый пароль',     
      type: 'password',
      name: 'password_check',
      validationType: "password"
    });
    this.children.submitButton = new Button({
      title: 'Сохранить',
      type: "submit"
    });
  }

   onSubmit() {
    submitValidation(this.children);
    const values = printValues(this.children);
    const data = Object.fromEntries(values);
    UserController.editPassword(data as UpdatePassword);
  }

  render() {
    return this.compile(template, this.props);
  }
}
