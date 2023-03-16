import template from './authorization.hbs';
import Block from '../../utils/Block';
import { Button } from '../../components/button';
import { Link } from '../../components/link';
import { printValues } from '../../utils/printFormData';
import { FormField } from '../../components/formField';
import { submitValidation } from '../../utils/validation';
import Router from '../../utils/router/Router';
import { FormFieldInput } from '../../components/formFieldInput';
import { SigninData } from '../../api/AuthApi/types';
import AuthController from '../../controllers/AuthController';


export class Authorization extends Block {
  constructor() {
    super('box');
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
    this.children.login = new FormField({
      label: 'Логин',
      name: 'login',
      value: 'ivanivanov',
      type: 'text',
      validationType: "login"
    })
    this.children.password = new FormField({
      label: 'Пароль',
      name: 'password',
      value: '******',
      type: 'password',
      validationType: "password"
    });
    this.children.button = new Button({
      title: 'Войти',
      type: 'submit',
    });
    this.children.link = new Link({
      title: 'Нет аккаунта?',
      to: '/registration',
      router: Router,
    });
  }

  onSubmit() {
    const values = Object
      .values(this.children)
      .filter(child => child instanceof FormField)
      .map((child) => ([(child as FormFieldInput).name(), (child as FormFieldInput).value]))

    const data = Object.fromEntries(values);

    AuthController.signin(data as SigninData);
  }


  render() {
    return this.compile(template, this.props);
  }
}
