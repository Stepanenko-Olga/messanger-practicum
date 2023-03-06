import template from './formFieldLabel.hbs';
import Block from '../../utils/Block';
import { FormFieldLabelProps } from './types';

export class FormFieldLabel extends Block {
  constructor(props: FormFieldLabelProps) {
    super('span', props);    
  }   

  init() {
    this.element?.classList.add('form__input-label');
       
  }  

  render() {   
    return this.compile(template, this.props);
  }
}
