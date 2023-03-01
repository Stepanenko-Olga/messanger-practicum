import { Button } from '../../components/button';
import { FormField } from '../../components/formField';
import Block from '../../utils/Block';
import { printValues} from '../../utils/printFormData';
import { submitValidation } from '../../utils/validation';
import template from './editInfo.hbs';

export class EditInfo extends Block {
  constructor() {
    super('form');
    this.setProps({       
      events: {
         submit: (event: Event) => {event.preventDefault(); 
          submitValidation(this.children);         
          printValues(this.children);}
       },     
     })
  }

  init() {
    this.element?.classList.add('container');
    this.children.editRowEmail = new FormField({
      label: 'Почта',
      placeholder: 'pochta@yandex.ru',
      type: 'text',
      name: 'email',
      validationType: "email"
    });
    this.children.editRowLogin = new FormField({
      label: 'Логин', 
      placeholder: 'ivanivanov', 
      type: 'text', 
      name: 'login',
      validationType: "login"
    });
    this.children.editRowFirstName = new FormField({
      label: 'Имя', 
      placeholder: 'Иван', 
      type: 'text', 
      name: 'first_name',
      validationType: "name"
    });
    this.children.editRowSecondName = new FormField({
      label: 'Фамилия', 
      placeholder: 'Иванов', 
      type: 'text', 
      name: 'second_name',
      validationType: "name"
    });
    this.children.editRowDisplayName = new FormField({
      label: 'Имя в чате', 
      placeholder: 'Иван', 
      type: 'text', 
      name: 'display_name',
      validationType: "name"
    });
    this.children.editRowPhone = new FormField({
      label: 'Телефон', 
      placeholder: '+7 910 123 45 67', 
      type: 'text', 
      name: 'phone',
      validationType: "phone"
    });
    this.children.submitButton = new Button({
      title: 'Сохранить',   
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
