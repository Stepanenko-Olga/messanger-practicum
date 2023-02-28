import template from './formField.hbs';
import Block from '../../utils/Block';
import { FormFieldProps } from './types';
import { FormFieldLabel } from '../formFieldLabel';
import { FormFieldInput } from '../formFieldInput';
import { ErrorMessage } from '../errorMessage';


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
      validationType: this.props.validationType    
    });
    this.children.error = new ErrorMessage({title: this.props.errorText});  
  } 
  


  render() {  
 
    return this.compile(template, this.props);
   
  }
}
