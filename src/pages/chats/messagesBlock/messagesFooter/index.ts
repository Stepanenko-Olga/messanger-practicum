import template from './messagesFooter.hbs';
import Block from '../../../../utils/Block';
import { MessagesFooterProps } from './types';
import { FormFieldInput } from '../../../../components/formFieldInput';
import { Button } from '../../../../components/button';
import MessagesController from '../../../../controllers/MessagesController';

export class MessagesFooter extends Block {
  constructor(props: MessagesFooterProps) {
    super('div', props);
  }

  init() {
    this.element?.classList.add('messages__footer');
    this.children.input = new FormFieldInput({
      type: 'text',
      placeholder: 'Сообщение',
      name: 'message'
    });

    this.children.button = new Button({
      title: 'Отправить',
      type: 'button',
      events: {
        click: () => {
          const input = this.children.input as FormFieldInput;
          const message = input.value;
          input.setValue('');
          MessagesController.sendMessage(this.props.selectedChat!.id, message);
        }
      }
    });
  }


  render() {
    return this.compile(template, this.props);
  }
}
