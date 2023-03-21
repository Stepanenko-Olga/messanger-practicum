import { Button } from '../button';
import Block from '../../utils/Block';
import template from './editAvatar.hbs';
import { EditAvatarProps } from './types';
import { FormFieldInput } from '../formFieldInput';
import UserController from '../../controllers/UserController';

export class EditAvatar extends Block {
  constructor(props: EditAvatarProps) {
    super('form', props);
    this.setProps({
      events: {
        submit: (event: Event) => {
          event.preventDefault();
          this.onSubmit();
        }
      },
    })
  }

  init() {
    this.element?.classList.add(this.props.display);
    this.children.editFile = new FormFieldInput({ 
      type: 'file',
      name: 'avatar',
    });
    this.children.editFile.element?.classList.add('edit-avatar')
    this.children.submitFileButton = new Button({
      title: 'Изменить',
      type: "submit",
    });
  }

  protected componentDidUpdate(oldProps: EditAvatarProps, newProps: EditAvatarProps): boolean {
    this.element?.classList.remove(oldProps.display);
    this.element?.classList.add(newProps.display);
    return true;
  }

  onSubmit() {
    const permittedFileTypes = ["jpg", "jpeg", "png"];
    const file = document.querySelector(".edit-avatar") as any;
    if (!file || !file.files.length) return;
    const fileName = file.files[0].name.toLowerCase();
    const isFileTypeOk = permittedFileTypes.some(type => fileName.endsWith(type));
    if (isFileTypeOk) {
      const formData = new FormData();
                    formData.append("avatar", file.files[0]);
                    UserController.editAvatar(formData);
      return;
  }

  }

  render() {
    return this.compile(template, this.props);
  }
}
