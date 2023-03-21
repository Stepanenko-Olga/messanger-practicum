import { UpdateData } from '../../../../api/UserApi/types';
import { Button } from '../../../../components/button';
import { FormField } from '../../../../components/formField';
import UserController from '../../../../controllers/UserController';
import Block from '../../../../utils/Block';
import { printValues } from '../../../../utils/printFormData';
import { submitValidation } from '../../../../utils/validation';
import template from './addChatModal.hbs';
import { AddChatModalProps } from './types';


export class AddChatModal extends Block {
  constructor(props: AddChatModalProps) {
    super('form', props);
    this.setProps({
      events: {
        submit: (event: Event) => {
          event.preventDefault();
          this.onSubmit();
        }
      }
    })
  }

  init() {
    this.element?.classList.add(this.props.display);
    this.children.chat = new FormField({
      label: 'Логин',
      type: 'text',
      name: 'userLogin',
      validationType: "login"
    });
    this.children.submitButton = new Button({
      title: 'Добавить',
      type: "submit",
    });
  }

  protected componentDidUpdate(oldProps: AddChatModalProps, newProps: AddChatModalProps): boolean {
    this.element?.classList.remove(oldProps.display);
    this.element?.classList.add(newProps.display);
    return true;
  }


  onSubmit() {
    submitValidation(this.children);
    const values = printValues(this.children);
    const data = Object.fromEntries(values);
    UserController.editUser(data as UpdateData);
  }

  render() {
    return this.compile(template, this.props);
  }
}
