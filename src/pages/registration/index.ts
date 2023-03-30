import template from './registration.hbs';
import Block from '../../utils/Block';
import { Button } from '../../components/button';
import { FormField } from '../../components/formField';
import { parseData } from '../../utils/parseFormData';
import { submitValidation } from '../../utils/validation';
import AuthController from '../../controllers/AuthController';
import { SignupData } from '../../api/AuthApi/types';

export class Registration extends Block {
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
    this.element?.classList.add('container');
    this.children.formInputEmail = new FormField({
      label: 'Почта',
      name: 'email',
      type: 'text',
      validationType: "email"
    });
    this.children.formInputLogin = new FormField({
      label: 'Логин',
      name: 'login',
      type: 'text',
      validationType: "login"
    });
    this.children.formInputFirstName = new FormField({
      label: 'Имя',
      name: 'first_name',
      type: 'text',
      validationType: "name"
    });
    this.children.formInputSecondName = new FormField({
      label: 'Фамилия',
      name: 'second_name',
      type: 'text',
      validationType: "name"
    });
    this.children.formInputPhone = new FormField({
      label: 'Телефон',
      name: 'phone',
      type: 'text',
      validationType: "phone"
    });
    this.children.formInputPassword = new FormField({
      label: 'Пароль',
      name: 'password',
      type: 'password',
      validationType: "password"
    });
    this.children.button = new Button({
      title: 'Зарегистироваться',
      type: 'submit',
    });
  }


  onSubmit() {
    submitValidation(this.children);
    const values = parseData(this.children);
    const data = Object.fromEntries(values);
    AuthController.signup(data as SignupData);
  }

  render() {
    return this.compile(template, this.props);
  }
}
