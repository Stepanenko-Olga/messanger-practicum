import { UserChatData } from '../../../../api/ChatsApi/types';
import { Button } from '../../../../components/button';
import { FormField } from '../../../../components/formField';
import ChatsController from '../../../../controllers/ChatsController';
import UserController from '../../../../controllers/UserController';
import Block from '../../../../utils/Block/Block';
import { parseData } from '../../../../utils/parseFormData';
import store from '../../../../utils/Store/Store';
import { submitValidation } from '../../../../utils/validation';
import template from './removeFromChatModal.hbs';
import { RemoveFromChatModalProps } from './types';


export class RemoveFromChatModal extends Block {
  constructor(props: RemoveFromChatModalProps) {
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
      }
    })
  }

  init() {
    this.element?.classList.add(this.props.display);
    this.children.chat = new FormField({
      label: 'Логин',
      type: 'text',
      name: 'login',
      validationType: "login"
    });
    this.children.submitButton = new Button({
      title: 'Удалить',
      type: "submit",
    });
  }

  protected componentDidUpdate(oldProps: RemoveFromChatModalProps, newProps: RemoveFromChatModalProps): boolean {
    this.element?.classList.remove(oldProps.display);
    this.element?.classList.add(newProps.display);
    return true;
  }


  onSubmit() {
    const chatId = store.getState().chats?.selectedChat?.id;
    if (submitValidation(this.children)) {
      const values = parseData(this.children);
      const data = Object.fromEntries(values);
      UserController.searchUser(data).finally(() => {
        const selectedUser = (store.getState().user?.selectedUser);
        const data: UserChatData = {
          users: selectedUser ? [selectedUser.id] : [],
          chatId: chatId
        }
        if (data.chatId && data.users?.length) ChatsController.removeUser(data);
        this.setProps({ display: "modal-hide" });
      });
    }

  }

  onReset() {
    this.setProps({ display: "modal-hide" });
  }


  render() {
    return this.compile(template, this.props);
  }
}
