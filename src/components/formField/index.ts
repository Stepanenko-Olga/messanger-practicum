import template from './formField.hbs';
import Block from '../../utils/Block';
import { FormFieldProps } from './types';
import { FormFieldLabel } from '../formFieldLabel';
import { FormFieldInput } from '../formFieldInput';
import { ErrorMessage } from '../errorMessage';
import { validationMasks } from '../formFieldInput/const';



export class FormField extends Block {
  constructor(props: FormFieldProps) {
    super('div', props); 
    }   

  get name() {
    return (this.props.name);
  }  
  
  get title() {
    return this.props.title
  }


  init() {
    this.element?.classList.add('form__input');
    this.children.label = new FormFieldLabel({label: this.props.label}); 
    this.children.input = new FormFieldInput({      
      name: this.props.name,
      value: this.props.value,
      type: this.props.type, 
      errorText: this.props.errorText,
      validationType: this.props.validationType,
      events: {
        focus: () => {this.checkValidation(this.props.validationType);},  
        blur: () => {this.checkValidation(this.props.validationType);}, 
               
      },   
    });
    this.children.error = new ErrorMessage({title: this.props.errorText});  
  } 
  
  checkValidation(validationType: string) {  
    switch(validationType) {
      case "login": this.validate(validationMasks.LOGIN, "Введите от 3 до 20 символов на латинице или цифр"); break;
      case "password": this.validate(validationMasks.PASSWORD, "Введите от 8 до 40 символов, обязательно хотя бы одну заглавную букву и цифру"); break;
      case "name": this.validate(validationMasks.NAME, "Первая буква должна быть заглавной, без пробелов, цифр, спецсимволов (допустим только дефис)"); break;
      case "email": this.validate(validationMasks.EMAIL, "Укажите email латиницей, можно включать цифры и спецсимволы, обязательно должна быть @"); break;
      case "phone": this.validate(validationMasks.PHONE, "Введите от 10 до 15 цифр" ); break;
      case "message": (this.children.input as FormFieldInput).value
      ? (this.children.error as Block).setProps({ title: undefined })
      : (this.children.error as Block).setProps({ title: "Поле обязательно к заполнению" }); break;
  } 
          
  }

  validate(mask: RegExp, text: string) {
    mask.test((this.children.input as FormFieldInput).value) 
    ? (this.children.error as Block).setProps({title: undefined}) 
    : (this.children.error as Block).setProps({title: text});
  }

  render() {  
 
    return this.compile(template, this.props);
   
  }
}
