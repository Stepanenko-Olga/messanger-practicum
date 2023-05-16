import template from './formFieldInput.hbs';
import Block from '../../utils/Block/Block';
import { FormFieldInputProps } from './types';
import { ErrorMessage } from '../errorMessage';

export class FormFieldInput extends Block {
  constructor(props: FormFieldInputProps) {
    super('input', props);
  }

  init() {
    this.element?.classList.add('form__input-field');
    this.element?.setAttribute("name", this.props.name);
    if (this.props.value) this.element?.setAttribute("value", this.props.value);
    this.children.error = new ErrorMessage({ title: this.props.errorText })
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

  setValue(value: string) {
    return (this.element as HTMLInputElement).value = value;
  }


  render() {
    return this.compile(template, this.props);
  }
}
