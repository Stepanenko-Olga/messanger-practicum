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
      case "login": this.validate(validationMasks.LOGIN); break;
      case "password": this.validate(validationMasks.PASSWORD); break;
      case "name": this.validate(validationMasks.NAME); break;
      case "email": this.validate(validationMasks.EMAIL); break;
      case "phone": this.validate(validationMasks.PHONE); break;
    }       
  }

  validate(mask: RegExp) {
    mask.test((this.children.input as FormFieldInput).value) 
    ? this.children.error.setProps({title: undefined}) 
    : this.children.error.setProps({title: "Поле содержит недопустимые символы"});
  }

  render() {  
 
    return this.compile(template, this.props);
   
  }
}
