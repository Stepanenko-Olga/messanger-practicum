import  template  from './formFieldInput.hbs';
import Block from '../../utils/Block';
import { FormFieldInputProps } from './types';
import { ErrorMessage } from '../errorMessage';

export class FormFieldInput extends Block {
  constructor(props: FormFieldInputProps) {
    super('input', props);     
  }   

  init() {
    this.element?.classList.add('form__input-field');
    this.children.error = new ErrorMessage({title: this.props.errorText})  
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


  render() {    
    return this.compile(template, this.props);
  }
}
