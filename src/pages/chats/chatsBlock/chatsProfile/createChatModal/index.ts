import { Button } from '../../../../../components/button';
import { FormField } from '../../../../../components/formField';
import ChatsController from '../../../../../controllers/ChatsController';
import Block from '../../../../../utils/Block/Block';
import { parseData } from '../../../../../utils/parseFormData';
import { submitValidation } from '../../../../../utils/validation';
import template from './createChatModal.hbs';
import { createChatModalProps } from './types';


export class CreateChatModal extends Block {
  constructor(props: createChatModalProps) {
    super('form', props);
    this.setProps({
      events: {
        submit: (event: Event) => {
          event.preventDefault();
          this.onSubmit();
        },
        reset: (_event: Event) => {
          this.onReset();
        }
      }
    })
  }

  init() {
    this.element?.classList.add(this.props.display);
    this.children.chat = new FormField({
      label: 'Название чата',
      type: 'text',
      name: 'title',
      validationType: "name"
    });
    this.children.submitButton = new Button({
      title: 'Создать',
      type: "submit",
    });
  }

  protected componentDidUpdate(oldProps: createChatModalProps, newProps: createChatModalProps): boolean {
    this.element?.classList.remove(oldProps.display);
    this.element?.classList.add(newProps.display);
    return true;
  }


  onSubmit() {
    if (submitValidation(this.children)) {
      const values = parseData(this.children);
      const data = Object.fromEntries(values);
      if (data.title) ChatsController.create(data);
      this.setProps({ display: "modal-hide" });
    }
  }

  onReset() {
    this.setProps({ display: "modal-hide" });
  }


  render() {
    return this.compile(template, this.props);
  }
}
