import template from './registration.hbs';
import Block from '../../utils/Block';
import { Button } from '../../components/button';
import { FormField } from '../../components/formField';
import { printValues } from '../../utils/printFormData';
import { submitValidation } from '../../utils/validation';

export class Registration extends Block {
  constructor() {
    super('form');
    this.setProps({
      events: {
        submit: (event: Event) => {
          event.preventDefault();
          submitValidation(this.children);
          printValues(this.children);
        }
      },
    })
  }

  init() {
    this.element?.classList.add('container');
    this.children.formInputEmail = new FormField({
      label: 'Почта',
      name: 'email',
      value: 'pochta@yandex.ru',
      type: 'text',
      validationType: "email"
    });
    this.children.formInputLogin = new FormField({
      label: 'Логин',
      name: 'login',
      value: 'ivanivanov',
      type: 'text',
      validationType: "login"
    });
    this.children.formInputFirstName = new FormField({
      label: 'Имя',
      name: 'first_name',
      value: 'Иван',
      type: 'text',
      validationType: "name"
    });
    this.children.formInputSecondName = new FormField({
      label: 'Фамилия',
      name: 'second_name',
      value: 'Иванов',
      type: 'text',
      validationType: "name"
    });
    this.children.formInputPhone = new FormField({
      label: 'Телефон',
      name: 'phone',
      value: '+7 (910) 123 45 67',
      type: 'text',
      validationType: "phone"
    });
    this.children.formInputPassword = new FormField({
      label: 'Пароль',
      name: 'password',
      value: '******',
      type: 'password',
      validationType: "password"
    });
    this.children.formInputPasswordCheck = new FormField({
      label: 'Пароль (еще раз)',
      name: 'password_check',
      value: '******',
      type: 'password',
      validationType: "password"
    });
    this.children.button = new Button({
      title: 'Зарегистироваться',
      type: 'submit',
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
