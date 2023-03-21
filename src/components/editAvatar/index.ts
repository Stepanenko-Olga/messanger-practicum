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
          this.onSubmit(event);
        }
      },
    })
  }

  init() {
    this.element?.classList.add(this.props.display);
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
  //const fileTypes = ["jpg", "jpeg", "png"];
/*   const fileName = file.files[0].name.toLowerCase();
  const checkType = fileTypes.some(type => fileName.endsWith(type));
      if (checkType) { */

  onSubmit() {   
    const file = document.querySelector(".edit-avatar") as HTMLInputElement; // получаем наш input
    if (!file) return;
    if (file.files) {      
      console.log(file.files[0])
      const data = new FormData();
      data.append('avatar', file.files[0]);
      console.log(data);
      UserController.editAvatar(data);     
      }   
  }

  render() {
    return this.compile(template, this.props);
  }
}
