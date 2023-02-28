import template from './registration.hbs';
import Block from '../../utils/Block';
import { Button } from '../../components/button';
import { FormField } from '../../components/formField';

export class Registration extends Block {
  constructor() {
    super('box');
  }

  init() {
    this.element?.classList.add('container');
    this.children.formInputEmail = new FormField({
      label: 'Почта',
      name: 'email',
      value: 'pochta@yandex.ru',
      type: 'text',      
    });
    this.children.formInputLogin = new FormField({
      label: 'Логин',
      name: 'login',
      value: 'ivanivanov',
      type: 'text',      
    });
    this.children.formInputFirstName = new FormField({
      label: 'Имя',
      name: 'first_name',
      value: 'Иван',
      type: 'text',      
    });
    this.children.formInputSecondName = new FormField({
      label: 'Фамилия',
      name: 'second_name',
      value: 'Иванов',
      type: 'text',      
    });
    this.children.formInputPhone = new FormField({
      label: 'Телефон',
      name: 'phone',
      value: '+7 (910) 123 45 67',
      type: 'text',      
    });
    this.children.formInputPassword = new FormField({
      label: 'Пароль',
      name: 'password',
      value: '******',
      type: 'password',      
    });
    this.children.formInputPasswordCheck = new FormField({
      label: 'Пароль (еще раз)',
      name: 'password_check',
      value: '******',
      type: 'password',      
    });
    this.children.button = new Button({
      title: 'Зарегистироваться',
      events: {
        click: () => console.log('link'),
      },
    });
  }

  render() { 
    return this.compile(template, this.props);
  }
}
