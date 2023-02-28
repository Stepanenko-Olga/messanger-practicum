import { Button } from '../../components/button';
import { FormField } from '../../components/formField';
import Block from '../../utils/Block';
import template from './editInfo.hbs';

export class EditInfo extends Block {
  constructor() {
    super('form');
  }

  init() {
    this.element?.classList.add('container');
    this.children.editRowEmail = new FormField({
      label: 'Почта',
      placeholder: 'pochta@yandex.ru',
      type: 'text',
      name: 'email',
    });
    this.children.editRowLogin = new FormField({
      label: 'Логин', placeholder: 'ivanivanov', type: 'text', name: 'login',
    });
    this.children.editRowFirstName = new FormField({
      label: 'Имя', placeholder: 'Иван', type: 'text', name: 'first_name',
    });
    this.children.editRowSecondName = new FormField({
      label: 'Фамилия', placeholder: 'Иванов', type: 'text', name: 'second_name',
    });
    this.children.editRowDisplayName = new FormField({
      label: 'Имя в чате', placeholder: 'Иван', type: 'text', name: 'display_name',
    });
    this.children.editRowPhone = new FormField({
      label: 'Телефон', placeholder: '+7 910 123 45 67', type: 'text', name: 'phone',
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
