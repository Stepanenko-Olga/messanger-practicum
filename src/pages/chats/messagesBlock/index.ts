import { Button } from '../../../components/button';
import Block from '../../../utils/Block/Block';
import { State, withStore } from '../../../utils/Store/Store';
import { AddChatModal } from './addChatModal';
import { MessagesBody } from './messageBody';
import template from './messagesBlock.hbs';
import { MessagesFooter } from './messagesFooter';
import { MessagesHeader } from './messagesHeader';
import { MessagesBlockProps } from './types';



export class MessagesBlockWithPops extends Block {
  constructor(props: MessagesBlockProps) {
    super('box', props);
  }

  init() {
    this.element?.classList.add('messages');
    this.children.messagesHeader = this.createHeader(this.props);
    this.children.messagesBody = this.createMessages(this.props);
    this.children.messagesFooter = this.createFooter(this.props);


  }

  protected componentDidUpdate(oldProps: MessagesBlockProps, newProps: MessagesBlockProps): boolean {
    this.children.messagesBody = this.createMessages(newProps);
    this.children.messagesHeader = this.createHeader(newProps);
    this.children.messagesFooter = this.createFooter(newProps);
    return true;
  }

  private createHeader(props: MessagesBlockProps) {
    return new MessagesHeader({
      name: props.selectedChat?.title || '',
      avatar: props.selectedChat?.avatar || '',
    });
  }

  private createMessages(props: MessagesBlockProps) {
    return new MessagesBody({ messages: [...props.messages], selectedChat: props.selectedChat });
  }

  private createFooter(props: MessagesBlockProps) {
    return new MessagesFooter({ selectedChat: props.selectedChat });
  }



  render() {
    return this.compile(template, this.props);
  }

}

const withSelectedChatMessages = withStore((state: State) => {
  const selectedChat = state.chats?.selectedChat;
  if (!selectedChat) {
    return {
      messages: [],
      selectedChat: undefined,
      userId: state.user?.data?.id
    };
  }

  return {
    messages: (state.messages?.data || {})[selectedChat.id] || [],
    selectedChat: state.chats?.selectedChat,
    userId: state.user?.data?.id
  };
});

export const MessagesBlock = withSelectedChatMessages(MessagesBlockWithPops);
