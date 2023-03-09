import { Button } from '../button';
import { FormField } from '../formField';
import Block from '../../utils/Block';
import { printValues } from '../../utils/printFormData';
import template from './editAvatar.hbs';
import { EditAvatarProps } from './types';

export class EditAvatar extends Block {
  constructor(props: EditAvatarProps) {
    super('form', props);
    this.setProps({
      events: {
        submit: (event: Event) => {
          event.preventDefault();
          printValues(this.children as Record<string, Block>);
        }
      },
    })
  }

  init() {
    this.props.display === "block" ? this.element?.classList.add('modal-show') : this.element?.classList.add('modal-hide');
    this.children.editFile = new FormField({
      label: 'Аватар',
      type: 'file',
      name: 'avatar',
    });
    this.children.submitFileButton = new Button({
      title: 'Поменять',
      type: "submit",
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
