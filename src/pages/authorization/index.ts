import template from './authorization.hbs';
import Block from '../../utils/Block/Block';
import { Button } from '../../components/button';
import { Link } from '../../components/link';
import { parseData } from '../../utils/parseFormData';
import { FormField } from '../../components/formField';
import { submitValidation } from '../../utils/validation';
import Router from '../../utils/router/Router';
import { SigninData } from '../../api/AuthApi/types';
import AuthController from '../../controllers/AuthController';


export class Authorization extends Block {
  constructor() {
    super('box');
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
    this.children.login = new FormField({
      label: 'Логин',
      name: 'login',
      type: 'text',
      validationType: "login"
    })
    this.children.password = new FormField({
      label: 'Пароль',
      name: 'password',
      type: 'password',
      validationType: "password"
    });
    this.children.button = new Button({
      title: 'Войти',
      type: 'submit',
    });
    this.children.link = new Link({
      title: 'Нет аккаунта?',
      to: '/sign-up',
      router: Router,
    });
  }

  onSubmit() {
    submitValidation(this.children);
    const values = parseData(this.children);
    const data = Object.fromEntries(values);
    AuthController.signin(data as SigninData);
  }


  render() {
    return this.compile(template, this.props);
  }
}
