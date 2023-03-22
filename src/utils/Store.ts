import { set } from './helpers/helpers';
import { EventBus } from './EventBus';
import Block from './Block';
import { User } from '../api/AuthApi/types';
import { Chat, Message } from '../api/ChatsApi/types';

export enum StoreEvents {
  Updated = 'updated'
}

export interface State {
  user?: {
    data: User;
    error: string;
    isLoading: boolean;
    selectedUser?: User;
  },
  chats?: {
    data: Chat[];
    selectedChat?: Chat;
    error: string;
    isLoading: boolean;
  }
  messages?: {
    data: Record<number, Message[]>;
    error: string;
    isLoading: boolean;
  }
}

interface BlockConstructable<P extends Record<string, any> = any> {
  new(props: P): Block<P>;
}

export class Store extends EventBus {
  private state: State = {};

  // устанавливает в состояние значение
  public set(keypath: string, data: unknown) {
    set(this.state, keypath, data);


    // метод из EventBus - оповещение подписчиков
    this.emit(StoreEvents.Updated, this.getState());
  }

  public getState(): State {
    return this.state;
  }
}

const store = new Store();

export function withStore(mapStateToProps: (state: any) => any) {

  return function wrap(Component: BlockConstructable) {
    let previousState: any;


    return class WithStore extends Component {

      constructor(props: any) {
        // передаем в конструктор в качестве props state
        previousState = mapStateToProps(store.getState());

        super({ ...props, ...previousState });

        // подписываемся на обновление состояния
        store.on(StoreEvents.Updated, () => {
          const stateProps = mapStateToProps(store.getState());

          previousState = stateProps;
          // обновляем компонент с новыми пропсами     
          this.setProps({ ...stateProps });
        });
      }
    }

  }

}

export default store;
