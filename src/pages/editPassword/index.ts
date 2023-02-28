import { Button } from '../../components/button';
import { FormField } from '../../components/formField';
import Block from '../../utils/Block';
import template from './editPassword.hbs';

export class EditPassword extends Block {
  constructor() {
    super('box');
  }

  init() {
    this.element?.classList.add('container');
    this.children.editRowOldPassword = new FormField({
      label: 'Старый пароль', placeholder: '******', type: 'password', name: 'oldPassword',
    });
    this.children.editRowNewPassword = new FormField({
      label: 'Новй пароль', placeholder: '******', type: 'password', name: 'newPassword',
    });
    this.children.editRowPasswordCheck = new FormField({
      label: 'Повторите новый пароль', placeholder: '******', type: 'password', name: 'password_check',
    });
    this.children.submitButton = new Button({
      title: 'Сохранить',
      events: {
        click: () => console.log('link'),
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
