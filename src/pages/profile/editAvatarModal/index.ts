
import { Button } from '../../../components/button';
import UserController from '../../../controllers/UserController';
import Block from '../../../utils/Block';
import template from './editAvatarModal.hbs';
import { EditAvatarProps } from './types';


export class EditAvatar extends Block {
  constructor(props: EditAvatarProps) {
    super('form', props);
    this.setProps({
      events: {
        submit: (event: Event) => {
          event.preventDefault();
          this.onSubmit();
        },
        reset: (event: Event) => {
          this.onReset();
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



  onSubmit() {
    const file = document.querySelector(".edit-avatar") as HTMLInputElement; // получаем наш input
    if (!file) return;
    if (file.files) {
      const data = new FormData();
      data.append('avatar', file.files[0]);
      UserController.editAvatar(data);
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
