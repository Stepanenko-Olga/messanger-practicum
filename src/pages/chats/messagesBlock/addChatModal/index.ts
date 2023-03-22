import { AddToChatData } from '../../../../api/ChatsApi/types';
import { Button } from '../../../../components/button';
import { FormField } from '../../../../components/formField';
import ChatsController from '../../../../controllers/ChatsController';
import UserController from '../../../../controllers/UserController';
import Block from '../../../../utils/Block';
import { printValues } from '../../../../utils/printFormData';
import store from '../../../../utils/Store';
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
      name: 'login',
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
    const chatId = store.getState().chats?.selectedChat?.id;
    console.log(chatId);
    submitValidation(this.children);
    const values = printValues(this.children);
    const data = Object.fromEntries(values);
    UserController.searchUser(data).finally(() => {
      const selectedUser = (store.getState().user?.selectedUser);
      console.log(selectedUser);
      console.log(selectedUser ? selectedUser.id : "sddvd");

      const data: AddToChatData = {
        users: selectedUser ? [selectedUser.id] : [],
        chatId: chatId
      }  
      ChatsController.putUser(data);
    });
  }


  render() {
    return this.compile(template, this.props);
  }
}
