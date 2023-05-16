import template from './messagesFooter.hbs';
import Block from '../../../../utils/Block/Block';
import { MessagesFooterProps } from './types';
import { Button } from '../../../../components/button';
import MessagesController from '../../../../controllers/MessagesController';
import { FormField } from '../../../../components/formField';
import { parseData } from '../../../../utils/parseFormData';
import { submitValidation } from '../../../../utils/validation';

export class MessagesFooter extends Block {
  constructor(props: MessagesFooterProps) {
    super('div', props);
  }

  init() {
    this.element?.classList.add('messages__footer');
    this.children.field = new FormField({
      type: 'text',
      name: 'message',
      validationType: "message",

    });

    this.children.button = new Button({
      title: 'Отправить',
      type: 'button',
      events: {
        click: () => {
          if (submitValidation(this.children)) {
            const values = parseData(this.children);
            const data = Object.fromEntries(values);
            MessagesController.sendMessage(this.props.selectedChat!.id, data.message);
          }
        }
      }
    });
  }


  render() {
    return this.compile(template, this.props);
  }
}
