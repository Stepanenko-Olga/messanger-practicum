import { Button } from '../../components/button';
import { FormField } from '../../components/formField';
import Block from '../../utils/Block';
import { printValues } from '../../utils/printFormData';
import { submitValidation } from '../../utils/validation';
import template from './editPassword.hbs';

export class EditPassword extends Block {
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
    this.children.editRowOldPassword = new FormField({
      label: 'Старый пароль', 
      placeholder: '******', 
      type: 'password', 
      name: 'oldPassword',
      validationType: "password",
    });
    this.children.editRowNewPassword = new FormField({
      label: 'Новй пароль', 
      placeholder: '******', 
      type: 'password', 
      name: 'newPassword',
      validationType: "password"
    });
    this.children.editRowPasswordCheck = new FormField({
      label: 'Повторите новый пароль', 
      placeholder: '******', 
      type: 'password', 
      name: 'password_check',
      validationType: "password"
    });
    this.children.submitButton = new Button({
      title: 'Сохранить',   
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
