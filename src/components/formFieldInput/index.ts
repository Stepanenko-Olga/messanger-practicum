import  template  from './formFieldInput.hbs';
import Block from '../../utils/Block';
import { FormFieldInputProps } from './types';
import { ErrorMessage } from '../errorMessage';
import { validationMasks } from '../../process/validation/consts';

export class FormFieldInput extends Block {
  constructor(props: FormFieldInputProps) {
    super('input', props);
    this.setProps({      
      events: {
        focus: (event: Event) => { this.checkValidation();},  
        blur: (event: Event) => {this.checkValidation();},        
      },     
    })    
  }   



  init() {
    this.element?.classList.add('form__input-field');
    this.children.error = new ErrorMessage({title: this.props.errorText})  
  }  



  checkValidation() {  
    switch(this.validationType) {
      case "login": this.validate(validationMasks.LOGIN); break;
      case "password": this.validate(validationMasks.PASSWORD); break;
      case "name": this.validate(validationMasks.NAME); break;
      case "email": this.validate(validationMasks.EMAIL); break;
      case "phone": this.validate(validationMasks.PHONE); break;
    }       
  }

  validate(mask: RegExp) {
    mask.test(this.value) ? this.props.errorText="" : this.props.errorText="Поле содержит недопустимые символы"; console.log(this.props.errorText);
  }
  
  
  
  get value() {
    return (this.element as HTMLInputElement).value;
  }

  get name() {
    return this.props.name;
  }

  get validationType() {
    return this.props.validationType;
  }


  protected render() {    
    return this.compile(template, this.props);
  }
}
